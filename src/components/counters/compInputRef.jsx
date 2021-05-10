import React from "react";
import PropTypes from "prop-types";
import AppInput from "./inputWithRef";

export default class extends React.Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    value: PropTypes.number.isRequired,
    delProd: PropTypes.func.isRequired,
  };

  setCnt(value) {
    const newValue = Math.min(this.props.max, Math.max(this.props.min, value));
    console.log(newValue);
    this.props.onChange(newValue);
  }

  increase = () => {
    this.setCnt(this.props.value + 1);
  };

  decrease = () => {
    this.props.value > 1 ? this.setCnt(this.props.value - 1) : this.props.delProd(this.props.id);
  };

  onChange(e) {
    let newValue = parseInt(e.target.value);
    this.setCnt(isNaN(newValue) ? this.props.min : newValue);
  }

  render() {
    return (
      <>
        <button className="btn btn-primary  mr-1" onClick={this.decrease}>
          -
        </button>
        <AppInput value={this.props.value} onChange={(e) => this.onChange(e)} appDefaultProps={{ className: "form-control", type: "text" }} />
        <button className="btn btn-primary ml-1" onClick={this.increase}>
          +
        </button>
      </>
    );
  }
}
