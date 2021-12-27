import React from 'react';

// Импорт стилей
import './Header.css';

// Импорт изображений
import mailSvg from '../../images/mail.svg';
import calendarSvg from '../../images/calendar.svg';
import starSvg from '../../images/star.svg';
import bellSvg from '../../images/bell.svg';
import searchSvg from '../../images/search.svg';
import profileImg from '../../images/avatar.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__left-part">
        <ul className="header-navlist">
          <li className="header-navlist__item">
            <a href="/" className="header-navlist__link" title="Перейти на страницу сообщений">
              <img src={mailSvg} alt="Сообщения" className="header-navlist__img" />
            </a>
          </li>
          <li className="header-navlist__item">
            <a href="/" className="header-navlist__link" title="Перейти на страницу календаря">
              <img src={calendarSvg} alt="Календарь" className="header-navlist__img" />
            </a>
          </li>
          <li className="header-navlist__item">
            <a href="/" className="header-navlist__link" title="Перейти на страницу избранного">
              <img src={starSvg} alt="Избранное" className="header-navlist__img" />
            </a>
          </li>
        </ul>
      </div>
      <div className="header__right-part">
        <div className="header-buttonlist">
          <button className="header-button header-buttonlist__item" aria-label="Оповещения"><img src={bellSvg} alt="Оповещения" /></button>
          <button className="header-button header-buttonlist__item" aria-label="Поиск"><img src={searchSvg} alt="Поиск" /></button>
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
