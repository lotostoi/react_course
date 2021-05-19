import React from 'react'
import { inject, observer } from 'mobx-react'
import store from "s/rootStore"


export default function (Component) {
   return inject('store')(observer(Component))
}