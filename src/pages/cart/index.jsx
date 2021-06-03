import React from "react"
import Catalog from "c/catalogs/catalog"
import PageWrapper from "c/page-wrapper"
import Cart from '@/components/cart/cart'

export default function (props) {
  return (
    <PageWrapper>
      <Cart />
    </PageWrapper>
  )
}
