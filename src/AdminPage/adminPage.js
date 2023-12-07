import React, { useState } from 'react';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
const [surname, setSurname] = useState('');

  const [foundUser, setFoundUser] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/v1/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Другие необходимые заголовки, например, авторизация с помощью токена
        },
        body: JSON.stringify({
          email,
          name,
          surname
        })
      });

      if (!response.ok) {

        throw new Error('Network response was not ok');
      }

      const userData = await response.json();
      setFoundUser(userData);
      console.log('Found user:', userData);
      // Дополнительные действия после успешного поиска пользователя
    } catch (error) {
      console.error('Error searching for user:', error);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-window">
        <h2>Admin Page</h2>
        <form onSubmit={handleSearch}>

        <input name = "name" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input name = "surname" type="text" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <input name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {foundUser && (
          <div className="user-details">
            <h3>User Details:</h3>
            <p>Name: {foundUser.name}</p>
            <p>Email: {foundUser.email}</p>
            <p>Surname: {foundUser.surname}</p>
            {/* Дополнительные данные о пользователе */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
