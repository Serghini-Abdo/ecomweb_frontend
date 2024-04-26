import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
        <div key={product.id}>
            <li key={product.id}>{product.name}</li>
            <li key={product.id}>{product.desc}</li>
            <li key={product.id}>{product.sell_price}</li>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default App;

