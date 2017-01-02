//Dependencies for User routers
var express = require('express');
var router = express.Router();

//models
var Inventory = require('../models/inventory');
var User = require('../models/user');

//Want a route that goes to user/inventory
// //NEW route
  router.get('user/inventory', function(req, res) {
    res.render('inventory/show.ejs');
  });

//Create a user via a route over the break
//NEW USER route -- this has to be listed BEFORE the show route!!
router.get('/user/new', function(req, res) {
  console.log('This is the new USER route!');
  res.render('user/new');
});

//Route to create a new account
//POST /users
router.post('/', function(req, res) {
  console.log(req.body);
  User.create(req.body, function(err, user) {
    // if (err) { console.log(err) }
    res.redirect('/user/show');
  });
});


// Delete Route for a user
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user) {
    res.redirect('/user');
  });
});


//need a router.get here for users
router.get('/:id/edit', function(req, res){
  Inventory.findById(req.params.id, function(err, foundUser){
    res.render('user/edit.ejs', { inventory: foundUser
    });
  });
})

//Update Route for the users
router.put('/:id', function(req, res) {
  user.findByIdAndUpdate(req.params.id, req.body, {new:true},
    function(err, user) {
      console.log('The user: ', user);
      res.redirect('/user/' + user.id);
  });
});

// Show Gear Route
router.get('/:id', function(req, res) {
  console.log('This is the show route for user accounts!');
  User.findById(req.params.id, function(err, user) {
      if(err) {
      console.log(err);
    } else {
      res.render('user/show.ejs', { user: user });
    // res.render('user/show.ejs');
    }
  });
});



//===================================

//export the router - required in server.js and for Middleware
module.exports = router;
