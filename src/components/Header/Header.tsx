import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../images';
import './Header.scss';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className="header">
      <Link to="" className="header__logo">
        <img src={logoImg} alt="Logo Ease" />
      </Link>
      <nav className="header__navigation">
        <ul className={cn('header__nav-list', { 'header__nav-list_open': isOpenMenu })}>
          <li className="header__nav-item" onClick={() => setIsOpenMenu(false)}>
            <Link to="">Collesctions</Link>
          </li>
          <li className="header__nav-item" onClick={() => setIsOpenMenu(false)}>
            <Link to="blog">Blog</Link>
          </li>
          <li className="header__nav-item" onClick={() => setIsOpenMenu(false)}>
            <Link to="about">About</Link>
          </li>
          <li className="header__nav-item" onClick={() => setIsOpenMenu(false)}>
            <Link to="contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div
        className={cn('header__nav-menu', { active: isOpenMenu })}
        onClick={() => setIsOpenMenu((prev) => !prev)}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
}

export default Header;
