import React, { useState, useEffect } from 'react';


const ProductCard = ({ id, title, description, price, image, onClick }) => {
  const [token, setToken] = useState(localStorage.getItem('Bearer ') || '');
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    // Обновление состояния при изменении значения в localStorage
    const handleStorageChange = () => {
      setToken(localStorage.getItem('Bearer ') || '');
    };

    // Подписка на событие изменения localStorage
    window.addEventListener('storage', handleStorageChange);

    // Отписка от события при размонтировании компонента
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


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
