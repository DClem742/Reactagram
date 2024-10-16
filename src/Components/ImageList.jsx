import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.url} alt={image.caption} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
