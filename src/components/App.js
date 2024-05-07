import React, { useState, useEffect } from 'react';
import 'whatwg-fetch';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <div>
      <p>Loading...</p>
      {dogImageUrl && <img src={dogImageUrl} alt="A Random Dog" />}
    </div>
  );
}

export default App;
