import React from "react";
import propsType from "prop-types";
import catalogModule from "s/catalog";
import Slider from "c/singlePage/slider";
import Information from "c/singlePage/information";
import Error404 from "c/p404";
import injectObserver from "c/hoc/inject-observ";

export default injectObserver( class extends React.PureComponent {

  state = { id: this.props.router.match.params.id };
  item = this.props.store.catalog.getProducts.find(({ id }) => +this.state.id === +id);
  render() {
    return this.item ? (
      <>
        <Slider images={typeof this.item.img === "string" ? [this.item.img] : this.item.img}   />
        <Information item={this.item} />
      </>
    ) : (
      <Error404 />
    );
  }
  
})
