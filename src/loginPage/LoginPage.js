import React from 'react';

const LoginPage = ({ onBack, onRegister, onLogin }) => (
    <div className="login-container">
        <div className="login-window">
            <h2>Login window</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={onLogin} className="submit-button">Login</button>
            <button onClick={onRegister} className="register-button">Register</button>
            <label>
                <input type="checkbox" /> Do not quit
            </label>
            <button onClick={onBack} className="back-button">Back</button>
        </div>
    </div>
);

export default LoginPage;
