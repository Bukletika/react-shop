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
  const [categories, setCategories] = useState([]); // Категории с api


  useEffect(() => {

    Promise.all([productsApi.getProducts(), productsApi.getCategories()])
      .then(([products, categories]) => {
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
        setCategories(categories);
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
          categories={categories}
        />
      </div>
    </div>
  );
}

export default App;
