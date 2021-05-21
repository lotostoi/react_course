import { observable, action, computed, makeObservable, runInAction } from 'mobx'
import * as cartApi from '@/api/cart'

class Cart {
  constructor(root) {
    makeObservable(this, {
      cartProducts: observable,
      getProducts: computed,
      totalSum: computed,
      totalAmount: computed,
      changeProducts: action,
      delProd: action,
      removeFromCart: action,
      setCartProducts: action,
      isToCart: computed,
    })

    this.rootStore = root
  }

  cartProducts = []

  get getProducts() {
    return this.cartProducts
  }
  get totalSum() {
    return this.cartProducts.reduce((t, { price, amount }) => t + price * amount, 0)
  }
  get totalAmount() {
    return this.cartProducts.reduce((t, { amount }) => t + amount, 0)
  }

  get isToCart() {
    return (_id) => (this.cartProducts.find(({ id }) => id.toString() === _id.toString()) ? true : false)
  }

  changeProducts = async (e, _id) => {
    const newProd = this.cartProducts.find(({ id }) => id.toString() === _id.toString()) || {}
    if ('id' in newProd) {
      try {
        await cartApi.change({ id: _id, amount: e })
        newProd.amount = e
      } catch (e) {
        console.log(e)
      }
    }
  }

  addToCart = async (item) => {

    this.rootStore.catalog.isDisabledOn(item.id)
  
    try {
      const newItem = this.cartProducts.find(({ id }) => id.toString() === item.id.toString())
      if (newItem) {
        await cartApi.change({ id: newItem.id, amount: newItem.amount + 1 })
        runInAction(() => {
          this.rootStore.catalog.isDisabledOff(item.id)
          newItem.amount !== item.rest && newItem.amount++
        })
      } else {
        await cartApi.add({ ...item, amount: 1 })
        runInAction(() => {
          this.rootStore.catalog.isDisabledOff(item.id)
          this.cartProducts.push({ ...item, amount: 1 })
        })
      }
    } catch (e) {
      console.log(e)
      this.rootStore.catalog.isDisabledOff(item.id)
    }
  }

  removeFromCart = async (item) => {
    const id = item.id
    this.rootStore.catalog.isDisabledOn(id)
    try {
      if (item.amount > 1) {
        await cartApi.change({ id: item.id, amount: item.amount - 1 })
        runInAction(() => {
          item.amount--
        })
      } else {
        await cartApi.del(item.id)
        runInAction(() => {
          this.delProd(item.id)
        })
      }
    } catch (e) {
      console.log(e)
    }
    console.log(id)
    this.rootStore.catalog.isDisabledOff(id)
  }

  delProd = (_id) => {
    this.cartProducts = this.cartProducts.filter(({ id }) => id.toString() !== _id.toString())
  }

  async setCartProducts() {
    try {
      const cart = await cartApi.all()
      runInAction(() => {
        this.cartProducts = cart
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default Cart
