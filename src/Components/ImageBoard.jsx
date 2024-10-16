import React, { useState } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';
import './ImageBoard.css';

const ImageBoard = () => {
  const [images, setImages] = useState([]);

  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <div className="image-board">
      <header className="image-board-header">
        <h1>Reactagram</h1>
      </header>
      <main className="image-board-content">
        <ImageForm onAddImage={addImage} />
        <ImageList images={images} />
      </main>
    </div>
  );
};

export default ImageBoard;
