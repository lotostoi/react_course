const { Schema, model } = require('mongoose')
const { string } = require('prop-types')

const cartItem = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rest: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    img: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = model('cart-items', cartItem)