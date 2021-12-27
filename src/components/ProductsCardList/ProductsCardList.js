import React from 'react';

// Импорт компонентов
import ProductGridItem from '../ProductGridItem/ProductGridItem';
import ProductListItem from '../ProductListItem/ProductListItem';

// Импорт стилей
import './ProductsCardList.css';

function ProductsCardList({ products, productsView }) {
  return (
    <div className="products">
      <ul className={`${productsView ? 'products__grid' : 'products__list'}`}>

        {
        productsView ? (
          products.map((product) => (
            <ProductGridItem
              image={product.image}
              rating={product.rating}
              price={product.price}
              title={product.title}
              desc={product.desc}
              key={product.id}
              id={product.id}
              brandId={product.brandId}
            />
          ))
        ) : (
          products.map((product) => (
            <ProductListItem
              image={product.image}
              rating={product.rating}
              price={product.price}
              title={product.title}
              desc={product.desc}
              key={product.id}
            />
          ))
        )}


      </ul>
    </div>
  )
}

export default ProductsCardList
