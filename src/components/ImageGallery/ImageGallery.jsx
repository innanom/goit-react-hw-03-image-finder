import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ foundImages }) => {
    
    return (
        <ul>
            {foundImages.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    
                />
            ))}
        
        </ul>);
};

ImageGallery.propTypes = {
    foundImages: PropTypes.arrayOf(
        PropTypes.exact({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    )
   

}