import React from 'react'
import { Route } from 'react-router-dom'

import Cart from '@/components/cart/cart'
import Catalog from '@/components/catalog'
import Orders from '@/components/orders'
import Result from '@/components/result'
import ErrorPage from 'p/error'

const routesArray = [
  {
    name: 'home',
    path: '/',
    component: <Catalog />,
    exact: true,
  },
  {
    name: 'catalog',
    path: '/catalog',
    component: <Catalog />,
    exact: true,
  },
  {
    name: 'cart',
    path: '/cart',
    component: <Cart />,
    exact: true,
  },
  {
    name: 'orders',
    path: '/orders',
    component: <Orders />,
    exact: true,
  },
  {
    path: '**',
    component: <ErrorPage />,
  },
]

export const routes = routesArray.map((rout) => (
  <Route exact={rout.exact} key={rout.path} path={rout.path}>
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
