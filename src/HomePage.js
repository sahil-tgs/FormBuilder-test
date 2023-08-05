// HomePage.js

import React from 'react';
import Card from './components/Card';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Create a Form</h1>
      <div className="card-container">
        <Link to="/template-form" className="card-link">
          <Card
            title="Use Templates"
            text="customise a pre build form"
            imageSrc="/template.svg"
          />
        </Link>
        <Link to="/ai-form-builder" className="card-link">
          <Card
            title="AI FormBuilder"
            text="let AI create form for you"
            imageSrc="/ai.svg"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
