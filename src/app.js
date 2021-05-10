import React from 'react'
import Router from "@/store/Router"
import { observer } from "mobx-react";

export default @observer class extends React.Component {
 /*  constructor() {
    super()
  } */

  /*     state = {
  
        currentRoute: 'cart',
        formData: {
          name: {
            type: 'text',
            title: 'name',
            value: '',
          },
          email: {
            type: 'email',
            title: 'email',
            value: '',
          },
          text: {
            type: 'text',
            title: 'message',
            value: '',
          },
        }
  
      } */


  /* routeToCatalog = () => this.setState({ currentRoute: 'catalog' })
  routeToCart = () => this.setState({ currentRoute: 'cart' })
  routeToOrder = () => this.setState({ currentRoute: 'orders' }) */

  /*    changeFrom = (e, key) => {
       const form = { ...this.state.formData }
       form[key].value = e.target.value
       this.setState({
         formData: form
       })
     }
 
     router = () => {
       return this.state.currentRoute in this.pages ?
         this.pages[this.state.currentRoute]() :
         <div> 404</div>
     } */

  render() {
    return (
      <div className="container">
        {Router.page}
      </div>
    )
  }
}


