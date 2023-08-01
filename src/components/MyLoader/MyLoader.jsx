import React from 'react';
import './MyLoader.css';

const MyLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader-circle" />
      <div className="loader-text">&nbsp; Loading...</div>
    </div>
  );
};

export default MyLoader;