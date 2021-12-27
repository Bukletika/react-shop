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

      const sortedProducts = handleSort(selectedProducts, sortType)

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
        // const sorted = [...filteredProducts].sort((a, b) => {
        //   if (a[sortProperty] > b[sortProperty]) {
        //     return 1;
        //   }
        //   if (a[sortProperty] < b[sortProperty]) {
        //     return -1;
        //   }

        //   return 0;
        // });
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
              <div className="checkbox"><label><input type="checkbox" name="brands[]" value="1" /> Apple</label></div>
              <div className="checkbox"><label><input type="checkbox" name="brands[]" value="2" /> Samsung</label></div>
              <div className="checkbox"><label><input type="checkbox" name="brands[]" value="3" /> Lenovo</label></div>
              <div className="checkbox"><label><input type="checkbox" name="brands[]" value="4" /> Что-то еще</label></div>
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

      <main className="main">

        <select onChange={handleSortChange}>
          <option value="price">По цене</option>
          <option value="title">По названию</option>
          <option value="rating">По рейтингу</option>
        </select>

        <Search
          changeProductsView={setGridItems}
          searchProducts={searchProducts}
        />
        <ProductsCardList
          productsView={gridItems}
          products={pageOfItems}
        />
        <ProductPagination
          items={filteredProducts}
          onChangePage={onChangePage}
        />
      </main>

    </section>
  )
}

export default Shop
