import React from "react";
import { makeObservable, observable, action, computed } from "mobx";

import Cart from "@/components/cart/cart";
import Catalog from "@/components/catalog";
import Orders from "@/components/orders";

class Router {
  constructor() {
    makeObservable(this);
  }

  @observable currentRout = "cart";

  pages = {
    cart: () => <Cart />,
    catalog: () => <Catalog />,
    orders: () => <Orders />,
  };

  @computed
  get page() {
    console.log(1);
    return  this.currentRout in this.pages ?  this.pages[this.currentRout]()  : <div>404</div> ;
  }
  @action
  toPage (page) {
    console.log(1);
    this.carrentRout = page;
    console.log( this.carrentRout);
  };
}

export default new Router();
