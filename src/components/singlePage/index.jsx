import React from 'react'
import Slider from 'c/singlePage/slider'
import Information from 'c/singlePage/information'
import Error404 from 'c/p404'
import injectObserver from 'c/hoc/inject-observ'

export default injectObserver(
  class extends React.PureComponent {
    render() {
      const length = this.props.store.catalog.getProducts.length
      const item =
        length && this.props.router.match?.params
          ? this.props.store.catalog.getProducts.find(
              ({ id }) => this.props.router.match.params.id.toString() === id.toString()
            )
          : null

      return item ? (
        <>
          <Slider images={typeof item.img === 'string' ? [item.img] : item.img} />
          <Information item={item} />
        </>
      ) : !length ? (
        <div>Load..</div>
      ) : (
        <Error404 />
      )
    }
  }
)
