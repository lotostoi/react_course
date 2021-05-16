import React from 'react'
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import ordersStore from '@/store/orders'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import style from '@/components/orders/style.module.scss'

import { observer } from 'mobx-react'

export default observer(
  class extends React.Component {
    state = {
      showModal: false,
    }

    showModal = () => this.setState({ showModal: true })

    hideModal = () => this.setState({ showModal: false })

    successModal = () => {
      this.setState({ showModal: false })
      Router.toPage('result')
    }

    showError = (show, startValid, text) => {
      return !show && startValid ? <Form.Text className='text-muted'>{text}</Form.Text> : ''
    }

    render() {
      const bodyForm = []
      for (const key in ordersStore.formData) {
        if (Object.hasOwnProperty.call(ordersStore.formData, key)) {
          const element = ordersStore.formData[key]
          bodyForm.push(
            <Form.Group controlId='formBasicPassword' key={key}>
              <Form.Label>{element.title}</Form.Label>
              <Form.Control
                type={element.type}
                placeholder={element.title}
                onChange={(e) => ordersStore.changeForm(e, key)}
                value={element.value}
                className={!element.isValid && element.startValid ? style.error : ''}
              />
              {this.showError(element.isValid, element.startValid, 'test')}
            </Form.Group>
          )
        }
      }

      return (
        <>
          <Modal show={this.state.showModal} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Сheckout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={this.hideModal}>
                Close
              </Button>
              <Button variant='primary' onClick={this.successModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <h1> Make order</h1>
          <Form>{bodyForm}</Form>
          <button className='btn btn-warning' onClick={() => Router.toPage('cart')}>
            back to cart
          </button>
          <button className='btn btn-warning ml-5' disabled={ordersStore.isValid} onClick={this.showModal}>
            Next
          </button>
        </>
      )
    }
  }
)
