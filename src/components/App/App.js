import React, { useState, useEffect } from 'react';

// Импорт компонентов
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

// Импорт Api
import productsApi from '../../utils/ProductsApi';

// Импорт стилей
import './App.css';

function App() {

  // Список продуктов
  const [products, setProducts] = useState([]);  // Продукты с api


  useEffect(() => {
    // Получить список товаров
    productsApi.getProducts()
      .then((products) => {
        const sorted = [...products].sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }

          return 0;
        });
        setProducts(sorted);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`)
      })
  }, []);


  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Shop
          products={products}
        />
      </div>
    </div>
  );
}

export default App;
