import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ foundImages }) => {
    
    return (
        <ul>
            {foundImages.map(({ id, webformatURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                />
            ))}
        
        </ul>);
};

ImageGallery.propTypes = {
    foundImages: PropTypes.arrayOf(
        PropTypes.exact({
             webformatURL: PropTypes.string.isRequired,
             tags: PropTypes.string.isRequired,
             id: PropTypes.number.isRequired
        })
    )
   

}