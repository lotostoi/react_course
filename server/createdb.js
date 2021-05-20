const connectToMongoDb = require('./src/functions/connectDb')
const configDb = require('./src/config/DB')
const data = require('./src/data/catalog')
const Items = require('./src/models/item')


connectToMongoDb(configDb, (db) => {
    data.forEach(async (good, i) => {
        await new Items(good).save()
        console.log('+')
        if (i === data.length - 1) {
            db.disconnect()
            console.log('Success');
        }
    })
})

