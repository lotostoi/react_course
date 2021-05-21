import React from 'react'
import CartItem from 'c/cart/cartItem'
import style from './style.module.scss'
import './anim.scss'
import injectObserver from 'c/hoc/inject-observ'
import { NavLink } from 'react-router-dom'
import {routesMap} from 'r'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default injectObserver(
  class extends React.PureComponent {
    render () {
      const { cart, catalog } = this.props.store
      const totalSum = cart.cartProducts.reduce(
        (total, { price, amount }) => total + price * amount,
        0
      )
      const cartItems = cart.cartProducts.map(item => (
        <CSSTransition key={item.id} timeout={500} classNames='item'>
          <CartItem
            changeProducts={cart.changeProducts}
            addToCart={cart.addToCart}
            removeFromCart={cart.removeFromCart}
            cartItem={item}
            style={style}
            key={item.id}
            isDisabled={catalog.getById(item.id)?.isDisabled}
          />
        </CSSTransition>
      ))
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
                <TransitionGroup component={null}>{cartItems}</TransitionGroup>
              </tbody>
            </table>
            <div className={style.shoppingCart__buttons}>
              <button className={style.clearCart}>CLEAR SHOPPING CART</button>
              <button className={style.shop}>CONTINUE SHOPPING</button>
            </div>
            <div className={style.shoppingCart__discount}>
              <form className={style.adress}>
                <h4>Shipping Adress</h4>
                <select name='sity' className={style.sity}>
                  <option value='Bangladesh'>Bangladesh</option>
                  <option value='Moscow'>Moscow</option>
                  <option value='Vladivostok'>Vladivostok</option>
                </select>
                <input
                  type='text'
                  name='state'
                  className={style.state}
                  placeholder='State'
                />
                <input
                  type='text'
                  name='state'
                  className={style.state}
                  placeholder='Postcode/Zip'
                />
                <button type='submit'>Get a quote</button>
              </form>
              <form className={style.coupon}>
                <h4>Coupon discount</h4>

                <label>Enter your coupon code if you have one</label>
                <input
                  type='text'
                  name='state'
                  className={style.state}
                  placeholder='State'
                />
                <button type='submit'>Apply coupon</button>
              </form>
              <div>
                <p>
                  Sub total <span>${totalSum}</span>
                </p>
                <h4>
                  GRAND TOTAL <span>${totalSum}</span>
                </h4>
                <div />
                <NavLink to={routesMap('orders')} className={style.checkout}>
                  <span>Proceed to checkout</span>
                  <img src={require('@/assets/img/arrow.png')} alt='arrow' />
                </NavLink>
                {/*  <button
                  onClick={() => Router.toPage ('orders')}
                  className={style.checkout}
                >
                  Proceed to checkout
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
)
