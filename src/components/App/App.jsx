import React, { Component } from 'react';
import * as API from '../../services/Api';
import styles from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    images: [],
    largeImgURL: '',
    isLoading: false,
    isOpen: false,
    page: 1,
    query: 'car',
  };

  componentDidMount() {
    const { query, page } = this.state;
    this.getImages(query, page);
    window.addEventListener('keydown', this.closeModal);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page, images } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
    if (prevState.images !== images && images.length > 20) {
      // window.scrollTo({
      //   top: document.documentElement.clientHeight,
      //   behavior: 'smooth',
      // });
      window.scrollBy(0, window.innerHeight, 'smooth');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  onSearch = query => {
    this.setState({ images: [], query, page: 1 });
  };

  getImages = (query, page) => {
    this.setState({ isLoading: true });

    API.getImages(query, page)
      .then(res =>
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
        })),
      )
      .catch(err => {
        throw new Error(err);
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      });
  };

  openModal = largeImgURL => this.setState({ isOpen: true, largeImgURL });

  closeModal = e => {
    const { isOpen } = this.state;
    if (e.code === 'Escape' && isOpen) {
      this.setState({ isOpen: !isOpen });
    }
    if (e.target === e.currentTarget) {
      this.setState({ isOpen: !isOpen });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, largeImgURL, isOpen } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {isOpen && (
          <Modal
            largeImgURL={largeImgURL}
            images={images}
            closeModal={this.closeModal}
          />
        )}
        <Button loadMore={this.loadMore} />
      </div>
    );
  }
}

export default App;
