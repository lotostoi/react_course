import React from "react";
import { observable, action, computed, makeObservable } from "mobx";

import Cart from "@/components/cart/cart";
import Catalog from "@/components/catalog";
import Orders from "@/components/orders";
import Result from "@/components/result";

class Router {
  constructor() {
    makeObservable(this, {
      currentRout: observable,
      page: computed,
      toPage: action
    });

  }

  currentRout = "catalog";

  pages = {
    cart: () => <Cart />,
    catalog: () => <Catalog />,
    orders: () => <Orders />,
    result: () => < Result />,
  };

  get page() {
    return  this.currentRout in this.pages ?  this.pages[this.currentRout]()  : <div>404</div> ;
  }
  toPage(page) {
    this.currentRout = page;
  };
}

export default new Router();
