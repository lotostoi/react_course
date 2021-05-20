
const express = require('express')
const router = express.Router()
const CartItems = require('../models/cartItem')
const Items = require('../models/item')

router.get('/api/cart-goods', async (req, res) => {
    const items = await CartItems.find()
    res.json(items)
})
router.post('/api/cart-goods', async (req, res) => {
    await new CartItems(req.body).save()
    res.status(200).end()
})

router.put('/api/cart-goods', async (req, res) => {
    console.log(11)
    const id = req.body.id
    const newAmount = req.body.amount
    try {
        let good = await CartItems.findById(id)
        console.log(good);
        if (good) {
            await CartItems.findByIdAndUpdate(id, { $set: { amount: newAmount } }, { new: true })
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    } catch (e) {
        res.status(404).end()
    }
})

module.exports = router