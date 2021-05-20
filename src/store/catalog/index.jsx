
import { observable, action, computed, makeObservable } from 'mobx'
import { getRndFromArray } from 'f'

import * as catalogApi from '@/api/catalog'

class Catalog {
  constructor(root) {
    makeObservable(this, {
      products: observable,
      getProducts: computed,
      getFeaturedProducts: computed,
      totalSum: computed,
      setProducts: action,
    })
    this.rootStore = root
  }

  products = []

  get getProducts() {
    return this.products
  }

  get getFeaturedProducts() {
    return (amount) => {
      if (!this.products.length) return []
      if (amount > this.products.length - 1) {
        amount = this.products.length - 1
        try {
          throw new Error("Amount > product's amount")
        } catch (e) {
          console.error(e)
        }
      }
      return getRndFromArray(amount, this.products)
    }
  }

  get totalSum() {
    return this.cartProducts.reduce((t, { price, amount }) => t + price * amount, 0)
  }

  async setProducts() {
    try {
      const goods = await catalogApi.all()
      this.products = goods.map((good) => {
        good.id = good._id
        good.img = good.img.map((img) => require(`@/assets/img/${img}`))
        return good
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default Catalog
