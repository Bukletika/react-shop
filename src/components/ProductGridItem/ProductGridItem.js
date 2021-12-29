import React from 'react'

// Импорт стилей
import './ProductGridItem.css';

function Product({ image, rating, price, title, desc, id, brandId, categoryId }) {
  return (
    <li key={id} className="product products__item">
      <div className="product__image-wrapper">
        <img className="product__image" src={image} alt={title} />
      </div>
      <div className="product__info">
        <div className="product__wrapper">
          <button className="product__rating-btn">
            <span className="product__rating-number">{rating}</span>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.69751 1L9.64065 4.94953L13.986 5.58675L10.8418 8.65931L11.5838 13L7.69751 10.9495L3.81123 13L4.55327 8.65931L1.40903 5.58675L5.75437 4.94953L7.69751 1V1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="product__price">${price}</span>
        </div>
        <h2 className="product__title">{title}</h2>
        <p className="product__description">{desc}</p>
      </div>
      <div className="product__buttons">
        <button className="product__wishlist-btn">
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7054 2.14929C13.9814 1.41343 12.9991 1 11.9748 1C10.9506 1 9.96828 1.41343 9.2442 2.14929L8.50012 2.90512L7.75604 2.14929C6.24796 0.61741 3.80287 0.617411 2.29479 2.14929C0.786706 3.68118 0.786706 6.16485 2.29479 7.69674L3.03887 8.45256L8.50012 14L13.9614 8.45256L14.7054 7.69674C15.4299 6.96122 15.8369 5.96344 15.8369 4.92302C15.8369 3.88259 15.4299 2.88481 14.7054 2.14929Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Wishlist</button>
        <button className="product__addtocart-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M4.03651 1L1.24162 4.6V17.2C1.24162 18.1941 2.07583 19 3.10488 19H16.1477C17.1767 19 18.011 18.1941 18.011 17.2V4.6L15.2161 1H4.03651Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.737212" d="M1.24162 5.5H18.011" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.737212" d="M13.8186 9C13.8186 10.6569 12.1763 12 10.1503 12C8.12439 12 6.48204 10.6569 6.48204 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Add to cart</button>
      </div>
    </li>
  )
}

export default Product
