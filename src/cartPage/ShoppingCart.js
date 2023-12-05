import React from 'react';

const ShoppingCart = ({ onClose, cartItems }) => (
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
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  </div>
);

export default ShoppingCart;
