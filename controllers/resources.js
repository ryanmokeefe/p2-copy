const mongoose = require('mongoose')
const express = require('express')
const Resource = require('../models/resource-schema')
const Question = require('../models/question-schema')
const Answer = require('../models/answer-schema')
var usersController = require('../controllers/users');

const router = express.Router()


// // function for authenticated user:
// function authenticatedUser(req, res, next) {
//     // If the user is authenticated, then we continue the execution
//     if (req.isAuthenticated()) return next();
  
//     // Otherwise the request is always redirected to the home page
//     res.redirect('/');
//   }

// get main page
router.get('/', (req, res) => {
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
  
//   router.route('/signup')
//   .get(usersController.getSignup)
//   .post(usersController.postSignup)
  
//   router.route('/login')
//   .get(usersController.getLogin)
//   .post(usersController.postLogin)
  
//   router.route("/logout")
//   .get(usersController.getLogout)
  
//   // adds route for profile page IF user is authenticated:
//   router.route("/profile")
//   .get(authenticatedUser, usersController.profile)

  // get one by name:
  router.get('/:name', (req, res) => {
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
    
    // update resources: 
    router.put('/:name', (req, res) => {
        Resource.findOneAndUpdate({name: req.params.name}, req.body.resource, {new: true})
        .then(resource => {
            res.redirect(`/resources/${resource.name}`)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    // Post new resources:
    router.post('/', (req, res) => {
        Resource.create(req.body.resource)
        .then((resource) => {
            res.redirect(`/resources/${resource.name}`)
        })
        .catch((err) => {
            console.log(err)
        })
    })
 
      
  
    // delete resource ** (make so only authorized user can delete): 
    router.delete('/:name', (req, res) => {
        Resource.findOneAndRemove({name: req.params.name})
        .then(() => {
            res.redirect('/resources')
        })
    })
    
    
  // routes for user (from passport)
    
    module.exports = router
    