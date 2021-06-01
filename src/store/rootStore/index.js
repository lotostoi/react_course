import Cart from "s/cart"
import Catalog from "s/catalog"
import * as catalogApi from '@/api/catalog'
import * as cartApi from '@/api/cart'

class RootStore {
    constructor() {
        this.api = {
            catalog: catalogApi,
            cart: cartApi,
        }
        this.cart = new Cart(this)
        this.catalog = new Catalog(this)

    }
}
const store = new RootStore()

store.catalog.setProducts()
store.cart.setCartProducts()

export default store
