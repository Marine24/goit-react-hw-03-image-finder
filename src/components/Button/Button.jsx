import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button type="button" onClick={loadMore} className={styles.Button}>
      Load more
    </button>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
