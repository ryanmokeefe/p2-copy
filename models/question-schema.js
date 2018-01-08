const mongoose = require('../db/connection')
const UserSchema = require('./user-schema')
const AnswerSchema = require('./answer-schema')


const QuestionSchema = new mongoose.Schema({
    title: String,
    question: String,
    creator: {},
    date: {type: Date, default: Date.now},
    answers: []
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
