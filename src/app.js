import React from 'react'

import Cart from "@/components/cart/cart"
import Catalog from "@/components/catalog"
import Orders from "@/components/orders"
import { products } from "@/store"


export default class extends React.Component {
  constructor() {
    super()
  }

  state = {
    products: products(),
    totalSumm: 0,
    currentRoute: 'cart',
    formData: {
      name: {
        type: 'text',
        title: 'name',
        value: '',
      },
      email: {
        type: 'email',
        title: 'email',
        value: '',
      },
      text: {
        type: 'text',
        title: 'message',
        value: '',
      },
    }

  }

  pages = {
    cart: () => <Cart
      items={this.state.products}
      changeProducts={this.changeProducts}
      delProd={this.delProd}
      toOrders={this.routeToOrder}
    />,
    catalog: () => <Catalog />,
    orders: () => <Orders formData={this.state.formData} toCart={this.routeToCart} changeFrom={this.changeFrom} />
  }

  routeToCatalog = () => this.setState({ currentRoute: 'catalog' })
  routeToCart = () => this.setState({ currentRoute: 'cart' })
  routeToOrder = () => this.setState({ currentRoute: 'orders' })

  changeFrom = (e, key) => {
    const form = { ...this.state.formData }
    form[key].value = e.target.value
    this.setState({
      formData: form
    })
  }

  changeProducts = (e, _id) => {
    const newProducts = [...this.state.products]
    const newProd = { ...(newProducts.find(({ id }) => +id === +_id) || {}) }
    if ('id' in newProd) {
      newProd.amount = e
      const idx = newProducts.findIndex(({ id }) => +id === +newProd.id)
      newProducts[idx] = newProd
      this.setState({ products: newProducts }, () => console.log(this.state.products))
    }
  }

  router = () => {
    return this.state.currentRoute in this.pages ?
      this.pages[this.state.currentRoute]() :
      <div> 404</div>
  }

  delProd = (_id) => {
    const newProducts = [...this.state.products]
    this.setState({ products: newProducts.filter(({ id }) => +id !== _id) })
  }

  render() {

    const totalSumm = this.state.products.reduce((start, prod) => start + prod.amount * prod.price, 0)

    return (
      <div className="container">
        {this.router()}
      </div>
    )
  }
}


