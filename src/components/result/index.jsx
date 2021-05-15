import React from "react";
import Cart from "s/cart";
import Orders from "s/orders";
import { observer } from "mobx-react";
export default observer(
  class extends React.Component {
    render() {
      return (
        <>
          <h1>Hello {Orders.formData.name.value}</h1>
          <p>Sum of your order is ${Cart.totalSum}</p>
          <button onClick={() => Router.toPage("catalog")}>Back to Catalog</button>
        </>
      );
    }
  }
);
