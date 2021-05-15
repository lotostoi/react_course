import React from "react";
import propsType from "prop-types";
import { observer } from "mobx-react";
import style from "./featuresGoods.module.scss";
import { NavLink } from "react-router-dom";
import { routesMap } from "r";
import catalogModule from "s/catalog";
import Good from "c/catalogs/good";

export default observer((props) => {
  const goods = catalogModule.getFeaturedProducts(3).map(good=> <Good good={good} key={good.id}/>)
  return (
    <section className={style.goods}>
      <h3>Fetured Items</h3>
      <p>Shop for items based on what we featured in this week</p>
      <div className={style.goods__cont}>
        {goods}
      </div>
      <NavLink to={routesMap("catalog")} className={style.goods__link}>
        <span>Browse All Product</span>
        <img src={require("@/assets/img/arrow.png")} alt="arrow" />
      </NavLink>
    </section>
  );
});
