import React, { useState } from 'react';

const ProductCard = ({ id, title, description, price, image, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true); // Set the card as clicked
    onClick({ id, title, description, price, image });
  };

  return (
    <div
      className={`product-card ${isClicked ? 'product-card-clicked' : ''}`}
      onClick={handleAddToCart}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductCard;
