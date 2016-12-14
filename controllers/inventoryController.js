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


//index route
router.get('/', function(req, res) {
  Inventory.find(function(err, inventory) {
    res.render('inventory/index.ejs')
  });
});

//Show Gear Route
router.get('/:id', function(req, res) {
  Inventory.findById(req.params.id, function(err, inventory) {
    //   if(err) {
    //   res.redirect('/inventory/new');
    // } else {
    //   res.render('inventory/show.ejs', { inventory: foundInventory });
    res.render('inventory/show.ejs');
    // }
  });
});

//Route to show a user's inventory of gear



//NEW route
router.get('/inventory/new', function(req, res) {
  res.render('inventory/new.ejs');
});

//Route to create a new piece of Gear in the inventory
//POST /inventory  <----question about this, as it does not have a destination specified for the post portion of the code.
router.post('/inventory/new', function(req, res) {
  Inventory.create(req.body, function(err, inventory) {
    if (err) { console.log(err) }
    res.render('inventory/new.ejs');
  });
});

//Update Route for the inventory list
router.put('/:id', function(req, res) {
  Inventory.findByIdAndUpdate(req.param.id, req.body, {new:true},
    function(err, inventory) {
      console.log('The inventory: ', inventory);
      res.render('/inventory/' + inventory.id);
  });
});

//Delete Route for a piece of gear in the inventory
// router.delete(':/id', function(req, res) {
//   Inventroy.findByIdAndRemove(req.params.id, function(err, inventory) {
//     res.redirect('/inventory/show.ejs');
//   });
// });









//Export the routers
module.exports = router;
