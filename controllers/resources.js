const mongoose = require('mongoose')
const express = require('express')
const Resource = require('../models/resource-schema')
const Question = require('../models/question-schema')
const Answer = require('../models/answer-schema')
const Router = express.Router()


// get main page
Router.get('/', (req, res) => {
    Resource.find({})
    .then((resource) => {
        // show all
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

// get one by name:
Router.get('/:name', (req, res) => {
    let name = req.params.name
    Resource.findOne({name: req.params.name})
    .then((resource) => {
        res.render('resources-show', {
            resource: resource
        })
    })
    .catch((err) => {
        console.log(err)
    })
})


module.exports = Router
