import React, { useState } from 'react';
import './ImageForm.css';

const ImageForm = ({ onAddImage }) => {
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateUrl(url)) {
      setError('URL must start with http:// or https://');
      return;
    }

    if (caption.trim() === '') {
      setError('Description cannot be empty');
      return;
    }

    onAddImage({ url, caption });
    setUrl('');
    setCaption('');
  };

  return (
    <form className="image-form" onSubmit={handleSubmit}>
      <input
        className="image-form-input"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter image URL (http:// or https://)"
        required
      />
      <input
        className="image-form-input"
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter description"
        required
      />
      {error && <p className="image-form-error">{error}</p>}
      <button className="image-form-button" type="submit">Add Image</button>
    </form>
  );
};

export default ImageForm;