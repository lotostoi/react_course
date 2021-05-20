const connectToMongoDb = require('./src/functions/connectDb')
const configDb = require('./src/config/DB')
const data = require('./src/data/catalog')
const Items = require('./src/models/item')


connectToMongoDb(configDb, async (db) => {
   

    await Items.deleteMany()
    db.disconnect()

})