import React, { useState, useEffect } from 'react';

const ShoppingCart = ({ onClose, cartItems }) => {
  const [token, setToken] = useState(localStorage.getItem('Bearer') || '');

  useEffect(() => {
    // Обновление состояния при изменении значения в localStorage
    const handleStorageChange = () => {
      setToken(localStorage.getItem('Bearer') || '');
    };

    // Подписка на событие изменения localStorage
    window.addEventListener('storage', handleStorageChange);

    // Отписка от события при размонтировании компонента
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
