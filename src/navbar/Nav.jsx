import React from 'react';
import style from "./nav.module.css";
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.navWrap}>
          <div className={style.logo}>
            <Link to={`/`}>Shopshop</Link>
          </div>
          <ul className={style.submenu}>
            <li>
              <Link to={`/About`}>about</Link>
            </li>
            <li>
              <Link to={`/cart`}>Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav