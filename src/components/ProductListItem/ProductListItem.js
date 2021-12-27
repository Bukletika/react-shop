import React from 'react'

// Импорт изображений
import productStarSvg from '../../images/product-star.svg';
import productHeartSvg from '../../images/heart.svg';
import productBagSvg from '../../images/shopping-bag.svg';

// Импорт стилей
import './ProductListItem.css';

function Product({ image, rating, price, title, desc, id }) {
  return (
    <li key={id} className="product products__item">
      <div className="product__image-wrapper">
        <img className="product__image" src={image} alt={title} />
      </div>
      <div className="product__info">
        <div className="product__wrapper">
            <button className="product__rating-btn">
              <span className="product__rating-number">{rating}</span>
              <img className="product__rating-star" src={productStarSvg} alt={rating} />
            </button>
          <span className="product__price">${price}</span>
        </div>
        <h2 className="product__title">{title}</h2>
        <p className="product__description">{desc}</p>
      </div>
      <div className="product__buttons">
        <button className="product__wishlist-btn"><img src={productHeartSvg} alt="В избранное" /> Wishlist</button>
        <button className="product__addtocart-btn"><img src={productBagSvg} alt="В корзину" /> Add to cart</button>
      </div>
    </li>
  )
}

export default Product
