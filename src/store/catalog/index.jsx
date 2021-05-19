import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import { products } from "./data";
import { getRndFromArray } from "f";

class Catalog {
  constructor(root) {
    makeObservable(this, {
      products: observable,
      getProducts: computed,
      getFeaturedProducts: computed,
      totalSum: computed,
      changeProducts: action,
      delProd: action,
    });

    this.rootStore = root

  }

  products = products();

  get getProducts() {
    return this.products;
  }

  get getFeaturedProducts() {
    return (amount) => {
      if (amount > this.products.length - 1) {
        amount = this.products.length - 1;
        try {
          throw new Error("Amount > product's amount");
        } catch (e) {
          console.error(e);
        }
      }
      return getRndFromArray(amount, this.products);
    };
  }

  get totalSum() {
    return this.cartProducts.reduce((t, { price, amount }) => t + price * amount, 0);
  }

  changeProducts = (e, _id) => {
    const newProd = this.cartProducts.find(({ id }) => +id === +_id) || {};
    if ("id" in newProd) {
      newProd.amount = e;
    }
  };

  delProd = (_id) => {
    this.cartProducts = this.cartProducts.filter(({ id }) => +id !== _id);
  };
}

export default Catalog;
