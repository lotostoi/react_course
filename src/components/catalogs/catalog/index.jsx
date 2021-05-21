import React from 'react'
import style from './catalog.module.scss'
import Good from 'c/catalogs/good'
import injectObserver from 'c/hoc/inject-observ'

export default injectObserver(
  class extends React.Component {
    render () {
      const { store } = this.props
      let goods =
        store.catalog.getProducts?.length &&
        !store.catalog.filteredProducts?.length ? (
          <p className={style['nothin-finded']}>
            По вашему запросу совпадений не найдено...
          </p>
        ) : !store.catalog.getProducts?.length ? (
          <div
            className='spinner-border spinner-grow-md spinner-border-md m-5'
            style={{ width: '30vh', height:'30vh' }}
          >
            <span className='visually-hidden'></span>
          </div>
        ) : (
          store.catalog.filteredProducts.map(good => {
            return (
              <Good
                good={good}
                key={good.id}
                addToCart={() => store.cart.addToCart(good)}
                removeFromCart={() => store.cart.removeFromCart(good)}
                isToCart={store.cart.isToCart(good.id)}
                isDisabled={store.catalog.getById(good.id).isDisabled}
              />
            )
          })
        )
      return (
        <>
          <section className={style.goods}>
            <h3>Catalog</h3>
            <div
              className={
                style.goods__cont +
                ' ' +
                (!store.catalog.getProducts?.length
                  ? style['goods__cont-center']
                  : null)
              }
            >
              {goods}
            </div>
          </section>
        </>
      )
    }
  }
)
