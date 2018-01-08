const mongoose = require('../db/connection')
// do I need to require all other schemas being used?


const ResourceSchema = new mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    url: String,
    videos: String,
    exercises: String,
    votes: Number,
    questions: [QuestionSchema],
    notes: [NotesSchema]
})

const Resource = mongoose,model('Resource', ResourceSchema)

module.exports = Question
