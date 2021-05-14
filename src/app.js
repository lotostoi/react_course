import React from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { routes } from '@/router'
import Header from 'c/header'
import Footer from 'c/footer'

export default observer(
  class extends React.Component {
    render() {
      return (
        <Router>
          <div className='wrapper'>
            <Header />
            <Switch>{routes}</Switch>
            <Footer/>
          </div>
        </Router>
      )
    }
  }
)
