import React from "react";
import { makeObservable, observable, action, computed } from "mobx";
import { products } from "@/store";

class Cart {

  constructor() {
    makeObservable(this);
  }

  @observable cartProducts = products();

  @computed get getProducts() {
    console.log(111);
    return this.cartProducts;
  }

  @action changeProducts = (e, _id) => {
    const newProd = this.cartProducts.find(({ id }) => +id === +_id) || {};
    if ("id" in newProd) {
      newProd.amount = e;
    }
  };

  @action delProd = (_id) => {
    this.cartProducts = this.cartProducts.filter(({ id }) => +id !== _id);
  };
}

export default new Cart();
