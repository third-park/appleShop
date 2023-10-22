import React from 'react';
import style from "./nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.navWrap}>
          <div className='logo'>Shopshop</div>
          <ul className={style.submenu}>
            <li>
              Home
            </li>
            <li>
              Cart
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav