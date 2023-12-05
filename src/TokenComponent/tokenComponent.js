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
    const newToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjNqc0BtYWlsLnJ1IiwiaWF0IjoxNzAxODE4NzQ2LCJleHAiOjE3MDE4MTk5NDZ9.i2KPTP4g4QDTOQVioemsC1AGTiL7sZjI58QA47ZtCHI'; // Replace with the new token
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
