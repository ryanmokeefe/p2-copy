const mongoose = require('mongoose')
const seedData = require('./seeds.json')

mongoose.connect('mongodb://localhost/project-2')
.then(() => {
    console.log(`Connection Established to DB`)
})
    .catch((err) => {
        console.log('Connection Failed!', error)
})

mongoose.Promise = Promise
module.exports = mongoose
