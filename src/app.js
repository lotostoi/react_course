import React from 'react'
import Valid from './counters/class.js'
import MyInput from './counters/compInput'
//import Valid from './counters/function.js'

export default class extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Sumsung 10',
        price: 2000,
        amount: 1,
        rest: 20
      },
      {
        id: 2,
        title: 'Apple 10',
        price: 4000,
        amount: 1,
        rest: 10
      },
      {
        id: 3,
        title: 'Nokia 10',
        price: 1000,
        amount: 1,
        rest: 5
      },
      {
        id: 4,
        title: 'Sony 10',
        price: 7000,
        amount: 1,
        rest: 4
      }
    ],
    totalSumm: 0
  }

  changeProducts(e, _id) {
    const newProducts = [...this.state.products]
    const newProd = {...(newProducts.find(({id}) => +id === +_id) || {})}
    if ('id' in newProd) {
      newProd.amount = e
      const idx = newProducts.findIndex(({id}) => +id === +newProd.id)
      newProducts[idx] = newProd
      this.setState({products: newProducts})
    }
  }

  delProd(_id) {
    const newProducts = [...this.state.products]
    this.setState({products: newProducts.filter(({id}) => +id !== _id)})
  }

  render() {
    const totalSumm = this.state.products.reduce((start, prod) => start + prod.amount * prod.price, 0)
    const productsList = this.state.products.map(prod => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.title}</td>
          <td>{prod.price}</td>
          <td>
            <MyInput min={1} max={prod.rest} value={prod.amount} onChange={e => this.changeProducts(e, prod.id)} />
          </td>
          <td>{prod.price * prod.amount}</td>
          <td>
            <button onClick={() => this.delProd(prod.id)}>X</button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>price</td>
              <td>amount</td>
              <td>total</td>
            </tr>
            {productsList}
          </tbody>
        </table>
        <div>
          <span>Общая сумма: {totalSumm}</span>
        </div>
      </div>
    )
  }
}
