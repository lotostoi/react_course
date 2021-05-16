import React from "react";
import PropTypes from "prop-types";
import cartModule from "s/cart";
import MyInput from "../counters/compInputRef";
import { observer } from "mobx-react";

export default observer(
  class extends React.Component {
    static defaultProps = {
      changeProducts: function () {},
      delProd: function () {},
    };

    static propTypes = {
      cartItem: PropTypes.object.isRequired,
      style: PropTypes.object.isRequired,
      changeProducts: PropTypes.func.isRequired,
      delProd: PropTypes.func.isRequired,
    };

    state = {
      cartItem: this.props.cartItem,
    };

    chp = (e) => this.props.changeProducts(e, this.state.cartItem.id);

    render() {
      return (
        <tr className={this.props.style.trgood}>
          <td>
            <a href="#">
              <img src={typeof this.props.cartItem.img === "string" ? this.props.cartItem.img : this.props.cartItem.img[0]} alt="photo" />
            </a>
            <div className={this.props.style.description}>
              <h4>{this.props.cartItem.title}</h4>
            </div>
          </td>
          <td>${this.props.cartItem.price}</td>
          <td>
            <span>{this.props.cartItem.amount}</span>
          </td>
          <td>FREE</td>
          <td>${this.props.cartItem.amount * this.state.cartItem.price}</td>
          <td className={this.props.style.dec}>
            <button onClick={() => cartModule.addToCart(this.props.cartItem)}>+</button>
            <MyInput value={this.props.cartItem.amount} min={1} max={this.props.cartItem.rest} onChange={this.chp} />
            <button onClick={() => cartModule.removeFromCart(this.props.cartItem)}>{this.props.cartItem.amount === 1 ? <i className="fa fa-trash" aria-hidden="true"></i> : "-"}</button>
          </td>
        </tr>
      );
    }
  }
);
