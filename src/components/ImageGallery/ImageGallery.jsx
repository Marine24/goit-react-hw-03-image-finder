import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => (
  <ul className={styles.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        webImgURL={image.webformatURL}
        largeImgURL={image.largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>
);
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
