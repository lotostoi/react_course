
const express = require('express')
const router = express.Router()
const Items = require('../models/item')

router.get('/api/goods', async (req, res) => {
    const items = await Items.find()
    res.json(items)
})

module.exports = router