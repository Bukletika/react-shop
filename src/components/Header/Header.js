import React from 'react';

// Импорт стилей
import './Header.css';

// Импорт изображений
import profileImg from '../../images/avatar.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__left-part">
        <ul className="header-navlist">
          <li className="header-navlist__item">
            <a href="/" className="header-navlist__link" title="Перейти на страницу сообщений">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.10282 1H19.9254C21.082 1 22.0282 1.9 22.0282 3V15C22.0282 16.1 21.082 17 19.9254 17H3.10282C1.94627 17 1 16.1 1 15V3C1 1.9 1.94627 1 3.10282 1Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.0282 3L11.5141 10L1 3" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
          <li className="header-navlist__item">
            <a href="/" className="header-navlist__link" title="Перейти на страницу календаря">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.15918" y="3" width="18.9254" height="18" rx="2" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.8275 1V5" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.41621 1V5" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.15918 9H20.0845" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
          <li className="header-navlist__item">
            <a href="/" className="header-navlist__link" title="Перейти на страницу избранного">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7297 1L14.9785 7.26L22.2438 8.27L16.9867 13.14L18.2274 20.02L11.7297 16.77L5.23196 20.02L6.47262 13.14L1.21558 8.27L8.48081 7.26L11.7297 1V1Z" stroke="#FFA84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__right-part">
        <div className="header-buttonlist">
          <button className="header-button header-buttonlist__item" aria-label="Оповещения">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3792 7C17.3792 3.68629 14.5548 1 11.0707 1C7.58667 1 4.76227 3.68629 4.76227 7C4.76227 14 1.60803 16 1.60803 16H20.5335C20.5335 16 17.3792 14 17.3792 7" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.8896 20C12.5134 20.6168 11.8204 20.9965 11.0707 20.9965C10.321 20.9965 9.62806 20.6168 9.25189 20" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="header-button header-buttonlist__item" aria-label="Поиск">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0758 17C14.7212 17 18.4871 13.4183 18.4871 9C18.4871 4.58172 14.7212 1 10.0758 1C5.4304 1 1.66455 4.58172 1.66455 9C1.66455 13.4183 5.4304 17 10.0758 17Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.5898 19L16.0162 14.65" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <a href="/" className="header__profile-link" title="John Doe">
          <div className="header__profile-wrapper">
            <h2 className="header__profile-name">John Doe</h2>
            <p className="header__profile-availability">Available</p>
          </div>
          <img className="header__profile-img" src={profileImg} alt="John Doe" />
        </a>
      </div>
    </header>
  )
}

export default Header
