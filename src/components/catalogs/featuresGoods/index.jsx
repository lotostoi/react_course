import React from 'react'
import style from './featuresGoods.module.scss'
import { NavLink } from 'react-router-dom'
import { routesMap } from 'r'
import Good from 'c/catalogs/good'

import injectObserver from 'c/hoc/inject-observ'

export default injectObserver(({ store }) => {
  const goods = store.catalog
    .getFeaturedProducts(3)
    .map((good) => (
      <Good
        good={good}
        key={good.id}
        addToCart={() => store.cart.addToCart(good)}
        removeFromCart={() => store.cart.removeFromCart(good)}
        isToCart={store.cart.isToCart(good.id)}
        isDisabled={store.catalog.getById(good.id).isDisabled}
      />
    ))
  return (
    <section className={style.goods}>
      <h3>Fetured Items</h3>
      <p>Shop for items based on what we featured in this week</p>
      <div className={style.goods__cont}>{goods}</div>
      <NavLink to={routesMap('catalog')} className={style.goods__link}>
        <span>Browse All Product</span>
        <img src={require('@/assets/img/arrow.png')} alt='arrow' />
      </NavLink>
    </section>
  )
})
