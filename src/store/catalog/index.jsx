import {observable, action, computed, makeObservable, runInAction} from 'mobx';
import {getRndFromArray} from 'f';



class Catalog {
  constructor (root) {
    makeObservable (this, {
      products: observable,
      getProducts: computed,
      getFeaturedProducts: computed,
      totalSum: computed,
      getById: computed,
      setProducts: action,
      isDisabledOn: action,
      isDisabledOff: action,
      filteredProducts: computed,
      setSearch: action,
      search: observable,
      getSearch: computed,
    });
    this.rootStore = root;
  }

  fetPropducts = [];

  search = '';

  products = [];

  get getProducts () {
    return this.products;
  }

  get getSearch () {
    return this.search;
  }

  setSearch = value => (this.search = value);

  get filteredProducts () {
    return this.search != ''
      ? this.products.filter (({title}) =>
          new RegExp (this.getSearch, 'i').test (title)
        )
      : this.products;
  }

  get getFeaturedProducts () {
    return amount => {
      if (this.fetPropducts.length) return this.fetPropducts;
      if (!this.products.length) return [];
      if (amount > this.products.length - 1) {
        amount = this.products.length - 1;
        try {
          throw new Error ("Amount > product's amount");
        } catch (e) {
          console.error (e);
        }
      }
      this.fetPropducts = getRndFromArray (amount, this.products);
      return this.fetPropducts;
    };
  }

  isDisabledOn = _id => {
    const prod = this.products.find (
      ({id}) => id.toString () === _id.toString ()
    );
    prod.isDisabled = true;
  };
  isDisabledOff = _id => {
    const prod = this.products.find (
      ({id}) => id.toString () === _id.toString ()
    );
    prod.isDisabled = false;
  };

  get totalSum () {
    return this.cartProducts.reduce (
      (t, {price, amount}) => t + price * amount,
      0
    );
  }
  get getById () {
    return _id =>
      this.products.find (({id}) => id.toString () === _id.toString ());
  }

  async setProducts () {
    try {
      const goods = await this.rootStore.api.catalog.all ();
      runInAction (() => {
        this.products = goods.map (good => {
          good.id = good._id;
          good.isDisabled = false;
          good.img = good.img.map (img => require (`@/assets/img/${img}`));
          return good;
        });
      });
    } catch (e) {
      console.log (e);
    }
  }
}

export default Catalog;
