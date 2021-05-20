const { Schema, model } = require('mongoose')

const item = new Schema({
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
    img: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})



module.exports = model('items', item)