import React from 'react'

// Импорт стилей
import './Search.css';

import useFormValidation from '../../hooks/useFormValidation';

function Search({ searchProducts, changeProductsView, onChange, products }) {

  const {
    values,
    errorMessages,
    isValid,
    handleInputChange,
  } = useFormValidation({})

  // Функция отправки данных с формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchProducts(values.search);
  }

  function setListView() {
    changeProductsView(false);
  }

  function setGridView() {
    changeProductsView(true);
  }

  return (
    <div className="search">
      <div className="search__wrapper">
        <h2 className="search__result"> {products.length} товаров найдено</h2>
        <div className="search__settings">
          <select className="search__sort" onChange={(evt) => onChange(evt)}>
            <option value="price">По цене</option>
            <option value="title">По названию</option>
            <option value="rating">По рейтингу</option>
          </select>
          <div className="search__filters">
            <button className="search__filters-button" onClick={() => setGridView()}>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.47046" y="1" width="6.28857" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="11.9513" y="1" width="6.28845" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="11.9513" y="11" width="6.28845" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="1.47046" y="11" width="6.28857" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="search__filters-button" onClick={() => setListView()}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.11511 1H14.7401" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.11511 7H14.7401" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.11511 13H14.7401" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <form className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search__products">
          <input
            className="search__form-input"
            type="search"
            name="search"
            onChange={handleInputChange}
            value={values.search || ''}
            placeholder="Поиск по каталогу"
            autoComplete="off"
            minLength="0"
          />
          {isValid ? '' : <div className="search__form-error">{errorMessages.search}</div>}
          <button className="search__form-button" type="submit">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0758 17C14.7212 17 18.4871 13.4183 18.4871 9C18.4871 4.58172 14.7212 1 10.0758 1C5.4304 1 1.66455 4.58172 1.66455 9C1.66455 13.4183 5.4304 17 10.0758 17Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.5898 19L16.0162 14.65" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Search
