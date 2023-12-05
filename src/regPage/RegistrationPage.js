
import React from 'react';

const RegisterPage = ({ onRegister }) => {
    return (
        <div className="register-container">
            <div className="register-window">
                <h2>Register</h2>
                <form onSubmit={onRegister}>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="tel" placeholder="Phone" required />
                    <input type="date" placeholder="Birth Date" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
