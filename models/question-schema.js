const mongoose = require('../db/connection')
const UserSchema = require('./user-schema')
const AnswerSchema = require('./answer-schema')


const QuestionSchema = new mongoose.Schema({
    title: String,
    question: String,
    creator: [{
        type: Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'User'
      }],
    date: {type: Date, default: Date.now},
    answers: [{
        type: Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'Answer'
      }]
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
