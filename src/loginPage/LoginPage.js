import React, { useState } from 'react';

const LoginPage = ({ onBack, onRegister }) => {
    const [loginResponse, setLoginResponse] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (event) => {
      event.preventDefault();

    try {
      // Выполнить запрос к API
      const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Другие необходимые заголовки
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();

     if(response.ok) {
        // Сохранение токена в localStorage
        localStorage.setItem('Bearer ', data.token);
        // Дополнительные действия после успешной аутентификации, например, перенаправление
      } else {
        // Обработка ошибок аутентификации
        console.error('Ошибка аутентификации:', data);
      }
    } catch (error) {
      console.error('Ошибка запроса:', error);
    }
  };

    
 


  return (
    <div className="login-container">
      <form method="POST" onSubmit={handleLogin}>
        <div className="login-window">
          <h2>Login window</h2>
          <input name="email" type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="submit-button">Login</button>
          <button onClick={onRegister} className="register-button">Register</button>
          <label>
            <input type="checkbox" /> Do not quit
          </label>
          <button onClick={onBack} className="back-button">Back</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
