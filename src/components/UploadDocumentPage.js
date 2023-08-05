// UploadDocumentPage.js
import React, { useState, useRef } from 'react';
import styles from './UploadDocumentPage.css';

const UploadDocumentPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false); // State to handle the upload animation

  const fileInputRef = useRef();

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    setSelectedFile(file);
    setFileUploaded(true);
  };

  const handleChooseFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileUploaded(true);
  };

  const handleUpload = () => {
    setUploading(true);
    // Simulate upload with a delay (you can replace this with actual upload logic)
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  };

  return (
    <div className={styles['upload-document-page']}>
      <h1>Upload Document</h1>
      <div
        className={`drop-area ${isDragging ? styles['dragging'] : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        {isDragging ? <p>Drop the file here</p> : <p>Drag and drop the file here</p>}
        <input
          type="file"
          accept=".pdf" // You can specify the accepted file types here
          onChange={handleChooseFile}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
      {fileUploaded && (
        <>
          <p>
            Selected File: {selectedFile.name}
            <br />
            {/* You can show additional file details here */}
          </p>
          <button onClick={handleUpload}>Upload</button>
        </>
      )}
      {uploading && <p>Uploading...</p>}
      {!fileUploaded && !uploading && (
        <p>
          {/* Instructions or any message before uploading */}
        </p>
      )}
    </div>
  );
};

export default UploadDocumentPage;
