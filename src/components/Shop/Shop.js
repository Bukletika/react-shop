import React, { useState, useEffect } from 'react';

// Импорт стилей
import './Shop.css';

// Импорт компонентов
import ProductsCardList from '../ProductsCardList/ProductsCardList';
import Search from '../Search/Search';
import ProductPagination from '../ProductPagination/ProductPagination';

function Shop({ products }) {

  // Начальная сортировка
  const startSort = 'price';

  // Тип отображения товаров
  const [gridItems, setGridItems] = React.useState(true);

  // Найденные товары
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Страница с товарами
  const [pageOfItems, setPageOfItems] = useState([]);


  // Был ли поисковый запрос на странице?
  const [query, setQuery] = useState(false);

  // Стейт параметра сортировки
  const [sortType, setSortType] = useState(startSort);

  let [filterArr, setFilterArr] = useState([]);

  function onChangePage(pageOfItems) {
    setPageOfItems(pageOfItems);
  }

  // Найти продукты по заданному слову
  const searchByWord = (productName, products) => {
    const resProductName = productName.toLowerCase();
    let searchResult = products.filter((item) => {
      return item.title.toLowerCase().includes(resProductName);
    });
    return searchResult;
  }

  // Поиск продуктов
  const searchProducts = (productName) => {
    try {
      setQuery(true);
      const selectedProducts = searchByWord(productName, products);

      const sortedProducts = handleSort(selectedProducts, sortType);

      setFilteredProducts(sortedProducts);
    }
    catch (err) { console.log('error') }
  }



  // Сортировка
  const handleSortChange = (evt) => {
    setQuery(true);
    setSortType(evt.target.value);
  }

  const handleSort = (items, sortProperty) => {
    const sorted = [...items].sort((a, b) => {
      if (a[sortProperty] > b[sortProperty]) {
        return 1;
      }
      if (a[sortProperty] < b[sortProperty]) {
        return -1;
      }

      return 0;
    });

    return sorted;
  }


  // Фильтрация

  const filterByParams = (filterParam, filteredProducts) => {

    let searchResult = filteredProducts.filter((item) => {
      return item[filterParam.name] === filterParam.value;
    });

    return searchResult;
  }

  const filterProducts = (filterParam) => {

    try {
      setQuery(true);
      const filteredRes = filterByParams(filterParam, filteredProducts);

      const filteredSortedProducts = handleSort(filteredRes, sortType);



      if (!filterParam.checked) {
        setFilteredProducts(products);

        let res = filterArr.filter(item => item[filterParam.name] !== filterParam.value)

        setFilterArr(res);
        console.log(filterArr);

      } else {

        const name = filterParam.name;
        const value = filterParam.value;
        const filterObj = { [name]: value };

        setFilterArr(filterArr.concat(filterObj))

        console.log(filterArr);

        setFilteredProducts(filteredSortedProducts);

      }


    }
    catch (err) { console.log('error') }
  }


  useEffect(() => {

    if (query) {
      const sortArray = type => {
        const types = {
          price: 'price',
          title: 'title',
          rating: 'rating',
        };
        const sortProperty = types[type];

        const sorted = handleSort(filteredProducts, sortProperty)

        setFilteredProducts(sorted);

      };

      sortArray(sortType);
    }

  }, [sortType]);


  useEffect(() => {
    if (!query) {
      setFilteredProducts(products);
    }
  }, [query, products]);

  return (
    <section className="shop">

      <aside className="sidebar">
        <h3 className="sidebar__title">Фильтр</h3>


        <form >
          <div className="col-md-4">
            <h4>Бренды</h4>
            <div id="brands">
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="1" /> Apple</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="2" /> Samsung</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="3" /> Lenovo</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="4" /> Что-то еще</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="5" /> Что-то еще</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="6" /> Что-то еще</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="7" /> Что-то еще</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="8" /> Что-то еще</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="9" /> Что-то еще</label></div>
              <div className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value="10" /> Что-то еще</label></div>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Фильтр по ценам</h4>
            <div id="prices-label">5000 - 50000 руб.</div>
            <br />
            <input type="hidden" id="min-price" name="min_price" value="5000" />
            <input type="hidden" id="max-price" name="max_price" value="50000" />
            <div id="prices"></div>
          </div>
        </form>

      </aside>

      <div className="main-content">

        <Search
          changeProductsView={setGridItems}
          searchProducts={searchProducts}
          onChange={handleSortChange}
          products={filteredProducts}
        />
        <ProductsCardList
          productsView={gridItems}
          products={pageOfItems}
        />
        <ProductPagination
          items={filteredProducts}
          onChangePage={onChangePage}
        />
      </div>

    </section>
  )
}

export default Shop
