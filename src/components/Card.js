// components/Card.js

import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ imageSrc, title, text, linkTo }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(linkTo);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={process.env.PUBLIC_URL + imageSrc} alt={title} />
      <div className="card-text">
        <h2>{title}</h2>
        <p className="card-paragraph">{text}</p>
      </div>
    </div>
  );
};

export default Card;
