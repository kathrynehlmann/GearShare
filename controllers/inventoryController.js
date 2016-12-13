// dependacies for routers
var express = require('express');
var router = express.Router();

//models
var Inventory = require('../models/inventory');
var User = require('../models/user');


//============================
//Main page after login - give the user the lsit of gear to the inventory
//GET list of gear by name listed in the inventory
router.get('/inventory/index', function(req, res) {
  // User.findById(req.session.loggedInUser.id, function(err, userData) {
  //   res.render('inventory/new.ejs', { inventory: inventoryData });
  res.send('landed on inventory/index');
  // });
});

//============================

//Gear listed by location (Lake house, main house, storage)
//Get /inventory/location
// router.get('/location')


//gear listed by activity


//Show Gear
router.get('/:id', function(req, res) {
  Inventory.findById(req.params.id, function(err, inventory) {
      res.send(inventory);
  });
});

//Route to show a user's inventory of gear



//Route to create a new piece of Gear in the inventory
//POST /inventory


//Update Route for the inventory list



//Export the routers
module.exports = router;
