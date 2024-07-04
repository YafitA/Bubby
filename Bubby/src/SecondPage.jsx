/* eslint-disable react/prop-types */
// src/SecondPage.jsx
import { useState } from 'react';
import './SecondPage.css';

const SecondPage = ({ navigate }) => {
  const [uploadedImage, setUploadedImage] = useState(null); // State to store selected image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Uploaded file:', file);
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedImage(e.target.result); // Set uploadedImage state with base64 data URL
      };
      reader.readAsDataURL(file); // Convert file to base64 data URL
      // Handle the file upload, e.g., display it or send it to a server
    }
  };

  return (
    <div className="second-page-container">
      <h1 className="page-title">!העלה את התמונה שלך</h1>

      {/* Description Area */}
      <div className="description-container">
        <label className="description-label">
          שתף את הזיכרונות שלך עם סבא וסבתא
        </label>
        <div className="description-content">
          !כך שכל המשפחה תוכל להנות מאלבום התמונות
        </div>
      </div>

      {/* Image Uploading Area */}
      <div className="upload-container">
        <input 
          type="file" 
          id="fileUpload" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="file-input" 
        />
        <label htmlFor="fileUpload" className="upload-label">
          {uploadedImage ? (
            <img 
              src={uploadedImage} 
              alt="Uploaded" 
              className="uploaded-image" 
            />
          ) : (
            <div className="upload-placeholder">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGgKnt4k7cn5fjg0hrhdPqSg8hC_UiWnC1w&s" 
                alt="Upload Logo" 
                className="upload-logo" 
              />
              <span className="upload-text">לחץ כדי להעלות תמונה</span>
            </div>
          )}
        </label>
      </div>

      {/* Back Button */}
      <button 
        className="circle-button2" 
        onClick={() => navigate('home')}>
        חזור
      </button>

      {/* Rectangular Button */}
      <button 
        className="rectangle-addPoints"
        onClick={() => navigate('home')}
        disabled={!uploadedImage} // Disable button if no image is uploaded
      >
        קבל את 5 הנקודות שלך
      </button>
      
    </div>
  );
};

export default SecondPage;

