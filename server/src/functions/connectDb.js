const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

module.exports = async function ({ login, password, nameDataBase }, cb) {
    try {
        const link = `mongodb+srv://${login}:${password}@cluster0.n6oze.mongodb.net/${nameDataBase}?retryWrites=true&w=majority`
        const db = await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true })
        cb(db)
    }
    catch (e) {
        console.error(e)
    }
}