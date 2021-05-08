import React from 'react'
import PropTypes, { object } from 'prop-types'
import MyInput from '../counters/compInputRef'
import isEqual from 'lodash.isequal'

export default class extends React.Component {
    static defaultProps = {
        changeProducts: function () { },
    }

    static propTypes = {
        cartItem: PropTypes.object.isRequired,
        style: PropTypes.object.isRequired,
        changeProducts: PropTypes.func.isRequired
    }

    state = {
        cartItem: this.props.cartItem
    }

    componentDidUpdate(prevProps) {

        if (!isEqual(prevProps.cartItem, this.props.cartItem)) {
            this.setState({ cartItem: this.props.cartItem }, () => console.log(this.props.cartItem))
        }
    }


    render() {
        return (
            <tr className={this.props.style.trgood}>
                <td>
                    <a href="#">
                        <img src={this.state.cartItem.img} alt="photo" />
                    </a>
                    <div className={this.props.style.description}>
                        <h4>{this.state.cartItem.title}</h4>
                    </div>
                </td>
                <td>${this.state.cartItem.price}</td>
                <td>
                    <span>{this.state.cartItem.amount}</span>
                </td>
                <td>FREE</td>
                <td>${this.state.cartItem.amount * this.state.cartItem.price}</td>
                <td className={this.props.style.dec} >
                    <MyInput
                        min={1}
                        max={this.state.cartItem.rest}
                        value={this.state.cartItem.amount}
                        onChange={(e) => this.props.changeProducts(e, this.state.cartItem.id)} />
                </td>
            </tr>)
    }
}