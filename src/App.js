import React, { useState } from 'react';
import './App.css';
import ShoppingCart from './cartPage/ShoppingCart';
import LoginPage from './loginPage/LoginPage';
import RegisterPage from './regPage/RegistrationPage';
import ProductCard from './productCard/ProductCard';
import fastFoodLogo from './fastfoodlogo.jpg';
import burgerImage from './burger1.jpg';
import pizzaImage from './pizza1.jpg';
import friesImage from './fries1.jpg';

const Header = ({ onLoginClick, onCartClick, onSearch }) => (
  <header className="header">
    <div className="logo">
      <img src={fastFoodLogo} alt="Fast Food Logo" />
    </div>
    <input className="search" 
    type="text" 
    placeholder="Searching" 
    onChange={(e) => onSearch(e.target.value)}
    />
    <button className="button cart" onClick={onCartClick}>Shopping cart</button>
    <button className="button login" onClick={onLoginClick}>Login</button>
  </header>
);

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, title: 'Burger', description: 'Delicious burger with cheese and veggies', price: 9.99, image: burgerImage },
    { id: 2, title: 'Pizza', description: 'Tasty pizza with assorted toppings', price: 12.99, image: pizzaImage },
    { id: 3, title: 'Fries', description: 'Crispy french fries served with ketchup', price: 5.99, image: friesImage },
    // ... Add more products with titles, descriptions, prices, and images
  ];

  const handleAddToCart = (selectedProduct) => {
    setCartItems([...cartItems, selectedProduct]);
  };
  
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {!showLogin && !showCart && !showRegister && (
        <>
          <Header
            onLoginClick={() => setShowLogin(true)}
            onCartClick={() => setShowCart(true)}
            onSearch={handleSearch}
          />
          <main className="main-content">
          {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={handleAddToCart}
              />
            ))}
          </main>
        </>
      )}


      {showLogin && (
        <LoginPage
          onBack={() => setShowLogin(false)}
          onRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        /*onLogin={{()=>}}*/
        />
      )}

      {showCart && (
        <ShoppingCart cartItems={cartItems} onClose={() => setShowCart(false)} />
      )}

      {showRegister && (
        <RegisterPage onBack={() => setShowRegister(false)} />
      )}
    </div>
  );
}

export default App;
