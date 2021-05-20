const PORT = process.env.NODE_PORT || 3500
const isDevelopment = process.env.NODE_EVN
const path = require('path')

const express = require('express')
const app = express()

const itemsRoute = require('./src/routes/items')
const cartRoute = require('./src/routes/cart')


const connectToMongoDb = require('./src/functions/connectDb')
const configDb = require('./src/config/DB')

const history = require('connect-history-api-fallback');

// need only in production
if (!isDevelopment) {
    app.use(history())
    app.use(express.static(path.join(__dirname, 'static')));
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json());



app.use('/', itemsRoute)
app.use('/', cartRoute)


connectToMongoDb(configDb, () => app.listen(PORT, () => console.log(`Server has been started on - http://localhost:${PORT}`)))


