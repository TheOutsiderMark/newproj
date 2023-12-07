import React, { useState, useEffect } from 'react';

const ShoppingCart = ({ onClose, cartItems }) => {
  
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('Bearer ');

  fetch('http://localhost:8080/api/v1/products', {
    method: 'GET', // или 'POST', 'PUT' и т.д.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(data => {
    setProducts(data);
  })
  .catch(error => {
    console.error('Ошибка аутентификации:', error);
  });


  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul>
        {products.map((item, index) => ( 
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
