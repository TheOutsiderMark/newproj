import React, { useEffect } from 'react';
import { useAuthToken, ApiService } from './ApiService';

function tokenComponent() {
  const { token, updateToken } = useAuthToken();
  const apiService = new ApiService();

  // Передать токен при вызове метода fetchData
  const fetchDataFromApi = async () => {
    try {
      const data = await apiService.fetchData(token);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Вызвать fetchDataFromApi при загрузке компонента
  useEffect(() => {
    fetchDataFromApi();
  }, [token]);

  // Update token when needed
  const handleUpdateToken = () => {
    const newToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3lzdGljazIyOEBnbWFpbC5jb20iLCJpYXQiOjE3MDE3ODI5MzAsImV4cCI6MTcwMTc4NDEzMH0.MJloZUyawqz4q9vTtkulEbTnVWX7ciBAROV8h2hy_cY'; // Replace with the new token
    updateToken(newToken);
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleUpdateToken}>Update Token</button>
    </div>
  );
}

export default tokenComponent;
