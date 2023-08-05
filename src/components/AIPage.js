import React, { useState } from 'react';
import './AIPage.css';
import { useNavigate } from 'react-router-dom'; // Keep only useNavigate

const AIPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleNewButtonClicked = () => {
    // Navigate to the "upload document" page
    navigate('/upload-document');
  };

  return (
    <div className="ai-page">
      <h1>AI Form Builder</h1>
      <p>This is the AI Form page. Enter some text below, and it will be saved in a variable.</p>
      <div className="form-group">
        <label htmlFor="inputTextArea">Enter your text here:</label>
        <textarea
          id="inputTextArea"
          rows="4"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your text here"
        ></textarea>
      </div>
      <div className="button-container">
        <button className="continue-button">Continue</button>
        <button className="new-button" onClick={handleNewButtonClicked}>
          Upload Files 
        </button>
      </div>
    </div>
  );
};

export default AIPage;
