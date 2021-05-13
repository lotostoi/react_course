import React from 'react'
import PropTypes from 'prop-types'
import MyInput from '../counters/compInputRef'

export default class extends React.Component {
    static defaultProps = {
        changeProducts: function () { },
        delProd: function () { },
    }

    static propTypes = {
        cartItem: PropTypes.object.isRequired,
        style: PropTypes.object.isRequired,
        changeProducts: PropTypes.func.isRequired,
        delProd: PropTypes.func.isRequired,
    }

    state = {
        cartItem: this.props.cartItem
    }

    chp=(e)=>this.props.changeProducts(e, this.state.cartItem.id)

    render() {
        return (
            <tr className={this.props.style.trgood}>
                <td>
                    <a href="#">
                        <img src={this.props.cartItem.img} alt="photo" />
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
                <td className={this.props.style.dec} >
                    <MyInput
                        min={1}
                        max={this.props.cartItem.rest}
                        delProd={this.props.delProd}
                        value={this.props.cartItem.amount}
                        id={this.props.cartItem.id}
                        onChange={this.chp} />
                </td>
            </tr>)
    }
}