import React from "react";
import { observer } from "mobx-react";
import style from "./catalog.module.scss";
import catalogModule from "s/catalog";
import Good from "c/catalogs/good";

export default observer(
  class extends React.Component {
    render() {
      const goods = catalogModule.getProducts.map((good) => <Good good={good} key={good.id} />);
      return (
        <>
          <section className={style.goods}>
            <h3>Catalog</h3>
            <div className={style.goods__cont}>
              {/*  <p v-else>По вашему запросу нечего не найдено...</p> */}
              {goods}
            </div>
          </section>
        </>
      );
    }
  }
);
