import React from 'react'
import { Route } from 'react-router-dom'

import Cart from '@/components/cart/cart'
import Home from 'p/home'
import Catalog from '@/components/catalog'
import Orders from '@/components/orders'
import Result from '@/components/result'
import ErrorPage from 'p/error'

const routesArray = [
  {
    name: 'home',
    path: '/',
    component: <Home />,
    exact: true,
    strict:false
  },
  {
    name: 'catalog',
    path: '/catalog',
    component: <Catalog />,
    exact: true,
    strict:true
  },
  {
    name: 'cart',
    path: '/cart',
    component: <Cart />,
    exact: true,
    strict:true
  },
  {
    name: 'orders',
    path: '/orders',
    component: <Orders />,
    exact: true,
    strict:true
  },
  {
    path: '**',
    component: <ErrorPage />,
  },
]

export const routes = routesArray.map((rout) => (
  <Route exact={rout.exact} strict={rout.strict} key={rout.path} path={rout.path}>
    {rout.component}
  </Route>
))

const routesMap = (key) => {
  const map = new Map()
  routesArray.forEach((rout) => map.set(rout.name, rout.path))
  if (map.has(key)) {
    return map.get(key)
  }
  throw new Error(`Rout with name --${key}-- not found!!!`)
}

export { routesMap }
