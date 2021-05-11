import React from 'react'
import Router from '@/store/Router'
import { observer } from 'mobx-react'

export default observer(
  class extends React.Component {
    render() {
      return <div className='container'>{Router.page}</div>
    }
  }
)
