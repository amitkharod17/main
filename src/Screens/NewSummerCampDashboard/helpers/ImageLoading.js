import React from 'react';
import BlurImageLoader from 'react-blur-image-loader';

function ImageLoading({ image }) {
    return (
        <BlurImageLoader
            src={image}
            preview={image}
            fullCover={true}
            maxBlurLevel={10}
            transitionTime={400} />
    )
}

export default ImageLoading
