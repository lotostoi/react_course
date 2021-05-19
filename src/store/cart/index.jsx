import React from "react";
import { observable, action, computed, makeObservable, reaction } from "mobx";

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

  changeProducts = (e, _id) => {
    const newProd = this.cartProducts.find(({ id }) => +id === +_id) || {};
    if ("id" in newProd) {
      newProd.amount = e;
    }
  };

  addToCart = (item) => {
    const newItem = this.cartProducts.find(({ id }) => id === item.id);
    newItem ? newItem.amount !== item.rest && newItem.amount++ : this.cartProducts.push({ ...item, amount: 1 });
  };

  removeFromCart = (item) => {
    item.amount > 1 ? item.amount-- : this.delProd(item.id);
  };

  delProd = (_id) => {
    this.cartProducts = this.cartProducts.filter(({ id }) => +id !== _id);
  };
}

export default Cart;
