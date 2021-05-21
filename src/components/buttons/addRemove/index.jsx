import React from "react";
import PropsTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./button.scss";
import ButtonDisabled from "c/buttons/disabledOnOff";

export default class extends React.PureComponent {
  static defaultProps = {
    disabled: true,
    title: "button",
    change: true,
  };
  static propsTypes = {
    add: PropsTypes.func.isRequired,
    remove: PropsTypes.func.isRequired,
    className: PropsTypes.string.isRequired,
    disabled: PropsTypes.bool.isRequired,
    title: PropsTypes.string.isRequired,
    change: PropsTypes.string.isRequired,
  };

  render() {
    return (
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={!this.props.change ? "add" : "del"}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="add-remove"
        >
          <div>
            <ButtonDisabled
              onClick={!this.props.change ? this.props.add : this.props.remove}
              className={this.props.className  + (!this.props.change ? " " : " add-remove-color")}
              title={!this.props.change ? "Add to Cart" : "Remove from Cart"}
              disabled={this.props.disabled}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    );
  }
}
