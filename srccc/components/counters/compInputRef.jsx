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

  input = React.createRef();

  setCnt(value) {
    const newValue = Math.min(this.props.max, Math.max(this.props.min, value));
    this.props.onChange(newValue);
    return newValue;
  }

  increase = () => {
    this.setCnt(this.props.value + 1);
  };

  decrease = () => {
    this.props.value > 1 ? this.setCnt(this.props.value - 1) : this.props.delProd(this.props.id);
  };

  onChange(e) {
    let newValue = parseInt(e.target.value);
    const realValue = this.setCnt(isNaN(newValue) ? this.props.min : newValue);
    if (realValue !== e.target.velue) {
      this.input.current.setValue(realValue);
    }
  }

  render() {
    return (
      <>
        <button className="btn btn-primary  mr-1" onClick={this.decrease}>
          -
        </button>
        <AppInput value={this.props.value} onChange={(e) => this.onChange(e)} appDefaultProps={{ className: "form-control", type: "text" }} ref={this.input} />
        <button className="btn btn-primary ml-1" onClick={this.increase}>
          +
        </button>
      </>
    );
  }
}
