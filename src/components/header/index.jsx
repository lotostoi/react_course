import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";
import { routesMap } from "r";
import { reaction } from "mobx";

import store from "s/rootStore"
import injectObserver from "c/hoc/inject-observ";

reaction(
  () => store.cart.totalSum,
  (val, prevVal, reaction) => {
    const cart = document.querySelector(`.${style.header__cart}`);
    cart.classList.add(`animate__shakeX`);
    setTimeout(() => cart.classList.remove(`animate__shakeX`), 300);
  }
);

export default injectObserver(({ store }) => {
  return (
    <header className={style.header}>
      <div className={style.header__cont}>
        <NavLink exact className={style.header__logo} to={routesMap("home")} activeClassName={style.active}>
          <img src={require("@/assets/img/logo.png")} alt="logo" />
          <p>
            BRSN<span>D</span>
          </p>
        </NavLink>
        <nav className={style.header__nav}>
          <NavLink exact strict to={routesMap("home")} activeClassName={style.active}>
            Main
          </NavLink>
          <NavLink exact strict to={routesMap("catalog")} activeClassName={style.active}>
            Catalog
          </NavLink>
        </nav>
        <div className={style.header__search}>
          <input type="text" className={style.fieldeSearch} placeholder="Search for item" />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <NavLink exact strict className={style.header__cart+ " animate__animated"} to={routesMap("cart")} activeClassName={style.active}>
          <span>{store.cart.totalAmount} pcs.</span>
          <img src={require("@/assets/img/cart.svg")} alt="cart" />
          <span>${store.cart.totalSum}</span>
        </NavLink>
      </div>
    </header>
  );
});
