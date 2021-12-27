import React, { useState, useEffect } from 'react';

// Импорт стилей
import './ProductPagination.css';

// Импорт изображений
import leftSvg from '../../images/left.svg';
import rightSvg from '../../images/right.svg';

function ProductPagination({ items, onChangePage }) {

  let initialPage = 1;
  let pageSize = 6;

  let [pager, setPager] = useState({});

  useEffect(() => {
    setPage(initialPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);


  function setPage(page) {
    // var { items, pageSize } = props;
    //var pager = pager

    if (page < 1 || pager.totalPages < 1) {
      page = 1;
      pager.totalPages = 1;
    } else {
      if (page > pager.totalPages) {
        return;
      }
    }

    // get new pager object for specified page
    pager = getPager(items.length, page, pageSize);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    //this.setState({ pager: pager });
    setPager(pager);

    // call change page function in parent component
    onChangePage(pageOfItems);
  }

  function getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 6
    pageSize = pageSize || 6;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  // var pager = this.state.pager;

  if (!pager.pages || pager.pages.length <= 1) {
    // don't display pager if there is only 1 page
    return null;
  }

  return (
    <div className="pagination-container">
      {/* <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => this.setPage(1)}>First</a>
            </li> */}
      <div className={pager.currentPage === 1 ? 'disabled' : 'pagination-container__left-arrow'}>
        <a href='#/' className="pagination-container__link" onClick={() => setPage(pager.currentPage - 1)}><img src={leftSvg} alt="Назад"/></a>
      </div>
      <ul className='pagination'>
        {pager.pages.map((page, index) =>
          <li key={index} className={pager.currentPage === page ? 'pagination__item pagination__item_type_active' : 'pagination__item'}>
            <a href='#/' className="pagination-container__link" onClick={() => setPage(page)}>{page}</a>
          </li>
        )}
      </ul>
      <div className={pager.currentPage === pager.totalPages ? 'disabled' : 'pagination-container__right-arrow'}>
        <a href='#/' className="pagination-container__link" onClick={() => setPage(pager.currentPage + 1)}><img src={rightSvg} alt="Вперед"/></a>
      </div>
      {/* <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.totalPages)}></a>
            </li> */}
    </div>
  )
}

export default ProductPagination;
