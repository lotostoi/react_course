import React from "react";
import propsTypes from "prop-types";
import style from "./good.module.scss";
import catrModule from "s/cart"
import { HashLink } from "react-router-hash-link";
import { observer } from "mobx-react";

function good(props) {
  return (
    <div className={style.goods__good}>
      <div className={style.img}>
        <img src={typeof props.good.img === "string" ? props.good.img : props.good.img[0]} width="261" height="279" alt="good" />
        <div className={style.contCart}>
          <button className={style.cart} onClick={() => props.addToCart(props.good)}>
            <img src={require("@/assets/img/cart_white.png")} width="23" height="22" alt="cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <HashLink
        to={`/catalog-list/${props.good.id}#single`}
      >
        {props.good.title}
      </HashLink>
      <span>$ {props.good.price} </span>
    </div>
  );
}

good.propsTypes = {
  good: propsTypes.object.isRequired,
};

export default observer(good);
