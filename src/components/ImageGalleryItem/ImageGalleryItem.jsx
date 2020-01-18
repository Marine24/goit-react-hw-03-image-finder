import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webImgURL, largeImgURL, openModal }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => openModal(largeImgURL)}
      role="presentation"
    >
      <img src={webImgURL} alt="" className={styles.ImageGalleryItem_image} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webImgURL: PropTypes.string.isRequired,
  largeImgURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
