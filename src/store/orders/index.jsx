import React from 'react'
import { observable, action, computed, makeObservable } from 'mobx'

class Cart {
  constructor() {
    makeObservable(this, {
      start: observable,
      formData: observable,
      disabled: observable,
      getForm: computed,
      changeForm: action,
      valid: action,
    })
  }
  start = false
  disabled = true

  formData = {
    name: {
      type: 'text',
      title: 'name',
      value: '',
      regExp: new RegExp('^[а-яА-ЯёЁA-z ]{2,}$', 'i'),
      isValid: false,
    },
    email: {
      type: 'email',
      title: 'email',
      value: '',
      regExp: new RegExp('^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$'),
      isValid: false,
    },
    text: {
      type: 'text',
      title: 'message',
      value: '',
      regExp: new RegExp('^[а-яА-ЯёЁA-z ]{2,}$', 'i'),
      isValid: false,
    },
  }

  get getForm() {
    return this.formData
  }

  get isValid() {
    return !Object.values(this.formData).every((el) => el.isValid)
  }

  valid(key) {
    const field = this.formData[key]
    field.isValid = field.regExp.test(field.value)
  }

  changeForm = (e, key) => {
    this.formData[key].startValid = true
    this.formData[key].value = e.target.value
    this.valid(key)
  }
}

export default new Cart()
