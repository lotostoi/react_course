import React from 'react'
import { routesMap } from '@/router'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
export default observer(
  class extends React.Component {
    render() {
      return (
        <>
          <Link className='btn btn-warning' to={routesMap('cart')}>
            Cart
          </Link>
          {/*  <button onClick={() => Router.toPage('cart')}>toCart</button> */}
          <div>Catalog</div>
        </>
      )
    }
  }
)
