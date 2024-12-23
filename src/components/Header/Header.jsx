
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const handleScrollToConnect = (e) => {
    e.preventDefault(); 
    const connectSection = document.getElementById('courses');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <Link onClick={closeMenu} to={'/'} className={s.logo}>
            <img src="/itacademylogo.svg" alt="" className={s.logo_img} />
          </Link>

          <div className={`${s.links} ${active ? s.active : ''}`}>
            <Link onClick={closeMenu} to={'/'}>WORK</Link>
            <Link onClick={closeMenu} to={'/'}>SERVICES</Link>
            <Link onClick={closeMenu} to={'/studio'}>STUDIO</Link>
            <Link onClick={closeMenu} to={'/'}>SHOP</Link>
          </div>

          <div className={s.connect}>
            <button onClick={handleScrollToConnect} className={s.playful_btn}>
           Изучить курсы            </button>
          </div>

          <div className={s.burger}>
            <button
              onClick={toggleBurger}
              className={`${s.playful_btn} ${active ? s.active : ''}`}
            >
              {active ? 'закрыть' : 'меню'}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
