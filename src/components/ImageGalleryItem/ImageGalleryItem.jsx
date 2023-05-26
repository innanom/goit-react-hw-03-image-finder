import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL }) => {
    
    <li className="gallery-item">
        <img src={webformatURL} alt={tags} largeImageURL={ largeImageURL} />
    </li>
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,

}
  
