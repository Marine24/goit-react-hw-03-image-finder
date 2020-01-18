import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Modal.module.css';

const Modal = ({ largeImgURL, closeModal }) => {
  return (
    <div onClick={closeModal} className={Styles.Overlay}>
      <div className={Styles.Modal}>
        <img src={largeImgURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImgURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
