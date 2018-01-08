const mongoose = require('../db/connection')
const User = require('./user-schema')

const AnswerSchema = new mongoose.Schema({
    answer: String,
    creator: [{
        type: Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'User'
      }],
    date: {type: Date, default: Date.now},
    votes: Number
})

const Answer = mongoose.model('Answer', AnswerSchema)

module.exports = Answer
