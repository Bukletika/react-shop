import React from 'react'

// Импорт стилей
import './Search.css';

// Импорт изображений
import searchSvg from '../../images/search.svg';
import gridSvg from '../../images/grid.svg';
import listSvg from '../../images/list.svg';

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
        <h2 className="search__result"> {products.length} results found on 5ms</h2>
        <div className="search__settings">
          <select className="search__sort" onChange={(evt) => onChange(evt)}>
            <option value="price">По цене</option>
            <option value="title">По названию</option>
            <option value="rating">По рейтингу</option>
          </select>
          <div className="search__filters">
            <button className="search__filters-button" onClick={() => setGridView()}><img src={gridSvg} alt="Плитка"/></button>
            <button className="search__filters-button" onClick={() => setListView()}><img src={listSvg} alt="Список"/></button>
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
            placeholder="Search hear"
            autoComplete="off"
            minLength="2"
            required
          />
          {isValid ? '' : <div className="search__form-error">{errorMessages.search}</div>}
          <button className="search__form-button" type="submit"><img src={searchSvg} alt="Найти" /></button>
        </fieldset>
      </form>
    </div>
  )
}

export default Search
