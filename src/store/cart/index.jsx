import { observable, action, computed, makeObservable } from "mobx";
import * as cartApi from "@/api/cart";

class Cart {
  constructor(root) {
    makeObservable(this, {
      cartProducts: observable,
      getProducts: computed,
      totalSum: computed,
      totalAmount: computed,
      changeProducts: action,
      delProd: action,
      addToCart: action,
      removeFromCart: action,
      setCartProducts: action,
    });

    this.rootStore = root;
  }

  cartProducts = [];

  get getProducts() {
    return this.cartProducts;
  }
  get totalSum() {
    return this.cartProducts.reduce((t, { price, amount }) => t + price * amount, 0);
  }
  get totalAmount() {
    return this.cartProducts.reduce((t, { amount }) => t + amount, 0);
  }

  changeProducts = async (e, _id) => {
    const newProd = this.cartProducts.find(({ id }) => id.toString() === _id.toString()) || {};
    if ("id" in newProd) {
      try {
        await cartApi.change({ id: _id, amount: e });
        newProd.amount = e;
      } catch (e) {
        console.log(e);
      }
    }
  };

  addToCart = async (item) => {
    this.rootStore.catalog.isDisabledOn(item.id);
    try {
      const newItem = this.cartProducts.find(({ id }) => id.toString() === item.id.toString());
      if (newItem) {
        await cartApi.change({ id: newItem.id, amount: newItem.amount + 1 });
        newItem.amount !== item.rest && newItem.amount++;
      } else {
        await cartApi.add({ ...item, amount: 1 });
        this.cartProducts.push({ ...item, amount: 1 });
      }
    } catch (e) {
      console.log(e);
    }
    this.rootStore.catalog.isDisabledOff(item.id);
  };

  removeFromCart = async (item) => {
    this.rootStore.catalog.isDisabledOn(item.id);
    try {
      if (item.amount > 1) {
        await cartApi.change({ id: item.id, amount: item.amount - 1 });
        item.amount--;
      } else {
        await cartApi.del(item.id);
        this.delProd(item.id);
      }
    } catch (e) {
      console.log(e);
    }
    this.rootStore.catalog.isDisabledOn(item.id);
  };

  delProd = (_id) => {
    this.cartProducts = this.cartProducts.filter(({ id }) => id.toString() !== _id.toString());
  };

  async setCartProducts() {
    try {
      this.cartProducts = await cartApi.all();
    } catch (e) {
      console.log(e);
    }
  }
}

export default Cart;
