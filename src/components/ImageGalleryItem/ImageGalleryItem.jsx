import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL, openModal }) => {
    
    return (
        <li className={css.imageGalleryItem} onClick={openModal}>
        <img className={css.imageGalleryItem__image} src={webformatURL} alt={tags} largeImageURL={ largeImageURL} />
    </li>)
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,

}
  
