// dependacies for routers
var express = require('express');
var router = express.Router();

//models
var Inventory = require('../models/inventory');
var User = require('../models/user');
//============================
//Main page after login - give the user the option to add new gear to the inventory

//GET New gear by name listed in the inventory
router.get('/inventory/new', function(req, res) {
  // User.findById(req.session.loggedInUser.id, function(err, userData) {
  //   res.render('inventory/new.ejs', { inventory: inventoryData });
  res.send('landed on inventory/new');
  // });
});

//============================

//Gear listed by location (Lake house, main house, storage)
//Get /inventory/location



//gear listed by activity


//Show Gear JSON


//Route to show a user's inventory of gear



//Route to create a new piece of Gear in the inventory
//POST /inventory


//Update the inventory list



//Export the routers
module.exports = router;
