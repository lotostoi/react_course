import React from 'react'
import { observable, action, computed, makeObservable } from 'mobx'
import { products } from '@/store'

class Cart {
  constructor() {
    makeObservable(this, {
      cartProducts: observable,
      getProducts: computed,
      totalSum: computed,
      changeProducts: action,
      delProd: action,
    })
  }

  cartProducts = products()

  get getProducts() {
    return this.cartProducts
  }
  get totalSum() {
    console.log(11);
    return this.cartProducts.reduce((t, { price, amount }) => t + price * amount, 0)
  }

  changeProducts = (e, _id) => {
    const newProd = this.cartProducts.find(({ id }) => +id === +_id) || {}
    if ('id' in newProd) {
      newProd.amount = e
    }
  }

  delProd = (_id) => {
    this.cartProducts = this.cartProducts.filter(({ id }) => +id !== _id)
  }
}

export default new Cart()
