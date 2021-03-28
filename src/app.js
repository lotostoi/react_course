import React from 'react'
import Valid from './counters/class.js'
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
      },
    ]
  };



  render() {

    const productsList = this.state.products.map(prod => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.title}</td>
          <td>{prod.price}</td>
          <td><Valid min={1} max={prod.rest} cnt={prod.amount}/></td>
          <td>{prod.price * prod.amount}</td>
        </tr>
      )
    })
    return (
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
    )
  }
}
