const mongoose = require('../db/connection')
const UserSchema = require('./user-schema')

const AnswerSchema = new mongoose.Schema({
    answer: String,
    creator: [UserSchema],
    date: {type: Date, default: Date.now},
    votes: Number
})

const Answer = mongoose.model('Answer', AnswerSchema)

module.exports = Answer
