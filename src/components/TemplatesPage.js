import React from 'react';
import { Link } from 'react-router-dom';

const TemplatePage = () => {
  return (
    <div className="template-page">
      <h1>Template Page</h1>
      <p>This is the Template Page content.</p>
      <div className="buttons">
        <Link to="/" className="button">Back</Link>
        <Link to="/ai" className="button">AI</Link>
      </div>
    </div>
  );
};

export default TemplatePage;
