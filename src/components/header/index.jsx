import React, { useRef, useState } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import style from './header.module.scss'
import { routesMap } from 'r'
import { reaction } from 'mobx'

import store from 's/rootStore'
import injectObserver from 'c/hoc/inject-observ'

reaction(
  () => store.cart.totalSum,
  (val, prevVal, reaction) => {
    const cart = document.querySelector(`.${style.header__cart}`)
    cart.classList.add(`animate__shakeX`)
    cart.classList.add(style.jump)
    setTimeout(() => {
      cart.classList.remove(`animate__shakeX`)
      cart.classList.remove(style.jump)
    }, 300)
  }
)

export default injectObserver(({ store }) => {

  const inputEl = useRef(null)
  const history = useHistory()
  const location = useLocation()

  const [showMenu, setShowMenu] = useState(false)

  const search = () => {
    if (location.path !== routesMap('catalog')) {
      history.push(routesMap('catalog'))
    }
    store.catalog.setSearch(inputEl.current.value)
  }
  const keyDownSearch = (e) => {
    if (e.keyCode === 13) search()
  }
  return (
    <header className={style.header}>
      <div className={style.header__cont}>
        <NavLink exact className={style.header__logo} to={routesMap('home')} activeClassName={style.active}>
          <img src={require('@/assets/img/logo.png')} alt='logo' />
          <p>
            BRSN<span>D</span>
          </p>
        </NavLink>
        <nav className={style.header__nav + (!showMenu ? " " + style.header__active : ' ')}>
          <NavLink exact strict to={routesMap('home')} activeClassName={style.active}>
            Main
          </NavLink>
          <NavLink exact strict to={routesMap('catalog')} activeClassName={style.active}>
            Catalog
          </NavLink>
        </nav>
        <div className={style.header__search}>
          <input
            type='text'
            className={style.fieldeSearch}
            placeholder='Search for item'
            ref={inputEl}
            onKeyDown={(e) => keyDownSearch(e)}
          />
          <button onClick={() => search()}>
            <i className='fa fa-search' aria-hidden='true' />
          </button>
        </div>
        <NavLink
          exact
          strict
          className={style.header__cart + ' animate__animated'}
          to={routesMap('cart')}
          activeClassName={style.active}
        >
          <span>{store.cart.totalAmount} pcs.</span>
          <img src={require('@/assets/img/cart.svg')} alt='cart' />
          <span>${store.cart.totalSum}</span>
        </NavLink>
        <button className={style['mobile-menu']} onClick={() => setShowMenu(!showMenu)} >
          {showMenu ?
            < i className='fa fa-times' aria-hidden='true'></i> :
            <i className="fa fa-bars" aria-hidden="true"></i>
          }
        </button>
      </div>
    </header >
  )
})
