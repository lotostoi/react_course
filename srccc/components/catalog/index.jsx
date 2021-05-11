import React from 'react'
import Router from '@/store/Router'
import { observer } from 'mobx-react'
export default 
  observer(
    class extends React.Component {
      render() {
        return (
          <>
            <button onClick={() => Router.toPage('cart')}>toCart</button>
            <div>Catalog</div>
          </>
        )
      }
    }
  )
