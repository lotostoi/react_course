import React from "react"
import Banner from "c/banners/main"
import BannerCategory from "c/banners/category"
import FeaturesGoods from "c/catalogs/featuresGoods"
import style from "./home.module.scss"
import PageWrapper from "c/page-wrapper"

export default function (props) {
  window.scrollTo({ top: 0, behavior: "auto" })
  return (
    <div className={style["home-page"]}>
      <PageWrapper>
        <Banner />
        <BannerCategory />
        <FeaturesGoods />
      </PageWrapper>

    </div>
  )
}
