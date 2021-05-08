import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './cartItem'
import isEqual from 'lodash.isequal'
import style from "./style.module.scss"
import ModalWindow from "@/components/modalWindow/modalWindow"

export default class extends React.Component {
    static defaultProps = {
        changeProducts: function () { },
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        changeProducts: PropTypes.func.isRequired
    }

    state = {
        cartItems: this.props.items,
        totalSam: this.props.items.reduce((total, { price, amount }) => total + price * amount, 0)
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.items, this.props.items)) {
            this.setState({
                cartItems: this.props.items,
                totalSam: this.props.items.reduce((total, { price, amount }) => total + price * amount, 0)
            })
        }
    }

    render() {
        const cartItems = this.state.cartItems.map(item => <CartItem
            changeProducts={this.props.changeProducts}
            cartItem={item}
            style={style}
            key={item.id} />)
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
                            <input
                                type="text"
                                name="state"
                                className={style.state}
                                placeholder="Postcode/Zip"
                            />
                            <button type="submit">Get a quote</button>
                        </form>
                        <form className={style.coupon}>
                            <h4>Coupon discount</h4>

                            <label>Enter your coupon code if you have one</label>
                            <input type="text" name="state" className={style.state} placeholder="State" />
                            <button type="submit">Apply coupon</button>
                        </form>
                        <div>
                            <p>Sub total <span>${this.state.totalSam}</span></p>
                            <h4>GRAND TOTAL <span>${this.state.totalSam}</span></h4>
                            <div></div>
                            <ModalWindow className={style.checkout} title={'Proceed to checkout'}/>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}