import { useState, useEffect } from 'react';

const useAuthToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // You can set the token in localStorage or retrieve it from a session or cookie
    const storedToken = localStorage.getItem('Bearer'); // Retrieve the token from localStorage

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const updateToken = (newToken) => {
    // You can also store the token in localStorage or a session here
    localStorage.setItem('Bearer ', newToken); // Store the token in localStorage
    setToken(newToken);
  };

  return { token, updateToken };
};

class ApiService {
  constructor() {
    // Initialize variables or configurations here
    this.baseUrl = 'http://localhost:8080'; // Replace with your API base URL
  }

  fetchData = async (Bearer) => {
    try {
      const response = await fetch(`${this.baseUrl}/your-endpoint`, {
        method: 'GET',
        headers: {
          'Authorization': Bearer,
          'Content-Type': 'application/json'
          // Add other necessary headers
        },
        // Add any additional configurations such as body for POST requests
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      return data; // Return fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Error fetching data');
    }
  };
  // Add other methods for different API operations (POST, PUT, DELETE, etc.)
}

export { useAuthToken, ApiService };
