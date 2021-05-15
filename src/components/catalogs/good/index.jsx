import React from "react";
import propsTypes from "prop-types";
import style from "./good.module.scss";
import { Link } from "react-router-dom";

function good(props) {
  return (
    <div className={style.goods__good}>
      <div className={style.img}>
        <img src={props.good.img} width="261" height="279" alt="good" />
        <div className={style.contCart}>
          <button className={style.cart} onClick={() => console.log(props.good.id)}>
            <img src={require("@/assets/img/cart_white.png")} width="23" height="22" alt="cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <Link to="/home"> {props.good.title} </Link>
      <span>$ {props.good.price} </span>
    </div>
  );
}

good.propsTypes = {
  good: propsTypes.object.isRequired,
};

export default good;
