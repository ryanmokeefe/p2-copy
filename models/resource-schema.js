const mongoose = require('../db/connection')

const ResourceSchema = new mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    url: String,
    videos: Boolean,
    exercises: Boolean,
    votes: Number,
    questions: [QuestionSchema]
})

const Resource = mongoose,model('Resource', ResourceSchema)

module.exports = Question
