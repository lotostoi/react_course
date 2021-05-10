import React from "react";
import propTypes from "prop-types";
import Form from 'react-bootstrap/Form'


export default class extends React.Component {
  static propTypes = {
    toCart: propTypes.func.isRequired,
    formData: propTypes.object.isRequired,
    changeFrom: propTypes.func.isRequired
  };

  render() {
    const bodyForm = []

    for (const key in this.props.formData) {
      if (Object.hasOwnProperty.call(this.props.formData, key)) {
        const element = this.props.formData[key];
        bodyForm.push(
            <Form.Group controlId="formBasicPassword"  key={key}>
              <Form.Label>{element.title}</Form.Label>
              <Form.Control type={element.type} placeholder={element.title} onChange={(e)=>this.props.changeFrom(e,key)} value={element.value} />
            </Form.Group>        
        )
      }
    }
    
    return (
      <>
        <h1> Make order</h1>
        <Form>
          {bodyForm}
        </Form>
        <button className ="btn btn-warning" onClick={this.props.toCart}>back to cart</button>
      </>
    );
  }
}
