import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'
import { routesMap } from 'r'

export default function () {
  return (
    <header className={style.header}>
      <div className={style.header__cont}>
        <NavLink className={style.header__logo} to={routesMap('home')} activeClassName = {style.active} >
          <img src={require('@/assets/img/logo.png')} alt='logo' />
          <p>
            BRSN<span>D</span>
          </p>
        </NavLink>
        <nav className={style.header__nav}>
          <NavLink to={routesMap('home')} activeClassName = {style.active} >
            Main
          </NavLink>
          <NavLink to={routesMap('catalog')} activeClassName = {style.active}  >
            Catalog
          </NavLink>
        </nav>
        <div className={style.header__search}>
          <input type='text' className={style.fieldeSearch} placeholder='Search for item' />
          <button type='submit'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </button>
        </div>
        <NavLink className={style.header__cart + ' ' + style.active} to={routesMap('cart')} activeClassName = {style.active} >
          <span>5 pcs.</span>
          <img src={require('@/assets/img/cart.svg')} alt='cart' />
          <span>$5</span>
        </NavLink>
      </div>
    </header>
  )
}
