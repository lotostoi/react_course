import Cart from "s/cart"
import Catalog from "s/catalog"

class RootStore {
    constructor() {
        this.cart = new Cart(this)
        this.catalog = new Catalog(this)
    }
}
 const store = new RootStore()

 store.catalog.setProducts()
 store.cart.setCartProducts()

export default store
