import React from "react";
import PropTypes from "prop-types";
import CartItem from "./cartItem";
import style from "./style.module.scss";
import Router from "@/store/Router"
import Cart from "@/store/Cart";
import { observer } from "mobx-react";

export default observer (class extends React.Component {

    render() {
      const totalSum = Cart.cartProducts.reduce((total, { price, amount }) => total + price * amount, 0);
      const cartItems = Cart.cartProducts.map((item) => <CartItem changeProducts={Cart.changeProducts} delProd={Cart.delProd} cartItem={item} style={style} key={item.id} />);
      return (
        <div className={style.shoppingCart}>
          <div className={style.shoppingCart__cont}>
            <table className={style.shoppingCart__table}>
              <tbody>
                <tr className={style.trtitle}>
                  <td>Product Details</td>
                  <td>unite Price</td>
                  <td>Quantity</td>
                  <td>shipping</td>
                  <td>Subtotal</td>
                  <td>ACTION</td>
                </tr>
                {cartItems}
              </tbody>
            </table>
            <div className={style.shoppingCart__buttons}>
              <button className={style.clearCart}>CLEAR SHOPPING CART</button>
              <button className={style.shop}>CONTINUE SHOPPING</button>
            </div>
            <div className={style.shoppingCart__discount}>
              <form className={style.adress}>
                <h4>Shipping Adress</h4>
                <select name="sity" className={style.sity}>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Moscow">Moscow</option>
                  <option value="Vladivostok">Vladivostok</option>
                </select>
                <input type="text" name="state" className={style.state} placeholder="State" />
                <input type="text" name="state" className={style.state} placeholder="Postcode/Zip" />
                <button type="submit">Get a quote</button>
              </form>
              <form className={style.coupon}>
                <h4>Coupon discount</h4>

                <label>Enter your coupon code if you have one</label>
                <input type="text" name="state" className={style.state} placeholder="State" />
                <button type="submit">Apply coupon</button>
              </form>
              <div>
                <p>
                  Sub total <span>${totalSum}</span>
                </p>
                <h4>
                  GRAND TOTAL <span>${totalSum}</span>
                </h4>
                <div></div>
                <button onClick={()=>Router.toPage('orders')} className={style.checkout}>
                  Proceed to checkout
                </button>
                {/* <ModalWindow className={style.checkout} title={'Proceed to checkout'}/>  */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

)