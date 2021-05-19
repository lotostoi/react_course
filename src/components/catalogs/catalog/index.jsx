import React from "react";
import { observer } from "mobx-react";
import style from "./catalog.module.scss";
import catalogModule from "s/catalog";
import Good from "c/catalogs/good";
import injectObserver from "c/hoc/inject-observ";

export default injectObserver(
  class extends React.Component {
    render() {
      const { store } = this.props;
      const goods = store.catalog.getProducts.map((good) => <Good good={good} key={good.id} addToCart={() => store.cart.addToCart(good)} />);
      return (
        <>
          <section className={style.goods}>
            <h3>Catalog</h3>
            <div className={style.goods__cont}>{goods}</div>
          </section>
        </>
      );
    }
  }
);
