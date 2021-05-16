import React from "react";
import propsTypes from "prop-types";
import style from "./infomation.module.scss";
import { Link } from "react-router-dom";

function information(props) {
  return (
    <div className={style.window}>
      <div className={style.window__cont}>
        <p className={style.window__women}>WOMEN COLLECTION</p>
        <div className={style.window__underLine}></div>
        <h3>{props.item.title}</h3>
        <p className={style.window__text}>{props.item.description}</p>
        <div className={style.window__add}>
          <p>
            MATERIAL: <span>COTTON</span>
          </p>
          <p>
            DESIGNER: <span>BINBURHAN</span>
          </p>
        </div>
        <span className={style.window__price}>${props.item.price}</span>
        <div className={style.window__line}></div>
        <div className={style.window__bottomBlock}>
          <div className={style.window__chooseColor}>
            <h4>CHOOSE COLOR</h4>
            <div className={style.selectColor}>
              <div className={style.color}></div>
              <span>Red</span>
              <i className={style['icon-down-open']}></i>
              <ul>
                <li>
                  <div className={style.color}></div>
                  <span>Green</span>
                </li>
                <li>
                  <div className={style.color}></div>
                  <span>Pink</span>
                </li>
                <li>
                  <div className={style.color}></div>
                  <span>Blue</span>
                </li>
                <li>
                  <div className={style.color}></div>
                  <span>Black</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.window__chooseSize}>
            <h4>CHOOSE Size</h4>
            <div className={style.selectSize}>
              <span>XXL</span>
              <i className={style['icon-down-open']}></i>
              <ul>
                <li>
                  <span>XL</span>
                </li>
                <li>
                  <span>L</span>
                </li>
                <li>
                  <span>XL</span>
                </li>
                <li>
                  <span>S</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.window__quantity}>
            <h4>Quantity</h4>
            <input type="text" value="2" onChange={(e)=>console.log(e)} />
          </div>
          <button>
            <img src={require('@/assets/img/cart_white.png')} alt="icon" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

information.propsTypes = {
  item: propsTypes.object.isRequired,
};

export default information;
