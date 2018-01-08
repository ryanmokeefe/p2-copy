const mongoose = require('../db/connection')

const QuizSchema = new mongoose.Schema({
    question: String,
    answer: String
})


const Quiz = mongoose.model('Quiz', QuizSchema)

module.exports = Quiz
