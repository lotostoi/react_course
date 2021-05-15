import React from "react";
import Banner from "c/banners/main";
import BannerCategory from "c/banners/category";
import FeaturesGoods from "c/catalogs/featuresGoods";
import style from "./home.module.scss";

export default function () {
  return (
    <div className={style["home-page"]}>
      <Banner />
      <BannerCategory />
      <FeaturesGoods />
    </div>
  );
}
