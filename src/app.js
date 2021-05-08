import React from 'react'

import MyInput from '@/components/counters/compInputRef'
import Cart from "@/components/cart/cart"



export default class extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Sumsung 10',
        price: 2000,
        amount: 1,
        rest: 20,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: 'Apple 10',
        price: 4000,
        amount: 1,
        rest: 10,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: 'Nokia 10',
        price: 1000,
        amount: 1,
        rest: 5,
        img: "https://via.placeholder.com/150"
      },
      {
        id: 4,
        title: 'Sony 10',
        price: 7000,
        amount: 1,
        rest: 4,
        img: "https://via.placeholder.com/150"
      },
    ],
    totalSumm: 0,
  }

  changeProducts(e, _id) {
    console.log(e);
    const newProducts = [...this.state.products]
    const newProd = { ...(newProducts.find(({ id }) => +id === +_id) || {}) }
    if ('id' in newProd) {
      newProd.amount = e
      const idx = newProducts.findIndex(({ id }) => +id === +newProd.id)
      newProducts[idx] = newProd
      this.setState({ products: newProducts }, () => console.log(this.state.products))
    }
  }

  delProd(_id) {
    const newProducts = [...this.state.products]
    this.setState({ products: newProducts.filter(({ id }) => +id !== _id) })
  }

  render() {
    const totalSumm = this.state.products.reduce((start, prod) => start + prod.amount * prod.price, 0)
    const productsList = this.state.products.map((prod) => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.title}</td>
          <td>{prod.price}</td>
          <td>
            <MyInput
              min={1}
              max={prod.rest}
              value={prod.amount}
              onChange={(e) => this.changeProducts(e, prod.id)}
            />
          </td>
          <td>{prod.price * prod.amount}</td>
          <td>
            <button onClick={() => this.delProd(prod.id)}>X</button>
          </td>
        </tr>
      )
    })
    return (
      <div className="container">
        <Cart items={this.state.products} changeProducts={this.changeProducts.bind(this)} />
      </div>
    )
  }
}
