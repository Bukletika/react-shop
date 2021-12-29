import React, { useState, useEffect } from 'react';

// Импорт стилей
import './Shop.css';

// Импорт компонентов
import ProductsCardList from '../ProductsCardList/ProductsCardList';
import Search from '../Search/Search';
import ProductPagination from '../ProductPagination/ProductPagination';

function Shop({ products, categories }) {

  // Начальная сортировка
  const startSort = 'price';

  // Тип отображения товаров
  const [gridItems, setGridItems] = React.useState(true);

  // Найденные товары
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Страница с товарами (6 на странице)
  const [pageOfItems, setPageOfItems] = useState([]);

  // Был ли поисковый запрос на странице?
  const [query, setQuery] = useState(false);

  // Стейт параметра сортировки
  const [sortType, setSortType] = useState(startSort);

  // Массив с отфильтрованными товарами
  let [filterArr, setFilterArr] = useState([]);

  // Стейт с отмеченными галочками
  let [checkedInputs, setCheckedInputs] = useState([]);

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

      if (filterArr.length > 0 || checkedInputs.length > 0) {
        const selectedProducts = searchByWord(productName, filterArr);
        const sortedProducts = handleSort(selectedProducts, sortType);
        setFilterArr(sortedProducts);
      } else {
        const selectedProducts = searchByWord(productName, products);
        const sortedProducts = handleSort(selectedProducts, sortType);
        setFilteredProducts(sortedProducts);
      }
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
        let res = filterArr.filter(item => item[filterParam.name] !== filterParam.value);
        setCheckedInputs(checkedInputs.filter(item => item[filterParam.name] !== filterParam.value));
        setFilterArr(res);
      } else {
        const name = filterParam.name;
        const value = filterParam.value;

        setCheckedInputs(checkedInputs.concat({[name]: value}));

        setFilterArr(filterArr.concat(filteredSortedProducts));

        if (filteredRes.length === 0 && filterArr.length === 0) {
          setFilterArr([]);
        }

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

        let sorted = [];

        if (filterArr.length > 0 || checkedInputs.length > 0) {
          sorted = handleSort(filterArr, sortProperty);
          setFilterArr(sorted)
        } else {
          sorted = handleSort(filteredProducts, sortProperty);
          setFilteredProducts(sorted);
        }

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
          <div>
            <h4>Бренды</h4>
            <div id="brands">
              {categories.map((category) => (
                <div key={`${category.title}_${category.id}`} className="checkbox"><label><input onChange={(e) => filterProducts(e.target)} type="checkbox" name="brandId" value={category.id} /> {category.title}</label></div>
              ))}
            </div>
          </div>

        </form>

      </aside>

      <div className="main-content">
        <Search
          changeProductsView={setGridItems}
          searchProducts={searchProducts}
          onChange={handleSortChange}
          products={filteredProducts}
          filterArr={filterArr}
        />
        <ProductsCardList
          productsView={gridItems}
          products={pageOfItems}
        />
        <ProductPagination
          items={
            filterArr.length > 0 || checkedInputs.length > 0 ? filterArr : filteredProducts
          }
          onChangePage={onChangePage}
        />
      </div>

    </section>
  )
}

export default Shop
