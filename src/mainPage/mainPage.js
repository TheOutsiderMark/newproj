import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {


    return (
        <div>
            <h1>Welcome </h1>
            <Link to="../loginPage/LoginPage">
                <button>Login</button>
            </Link>
            <Link to="../regPage/RegistrationPage">
                <button>Registrate</button>
            </Link>
        </div>
    );
}

export default MainPage;
