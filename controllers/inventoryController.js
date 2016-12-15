// dependacies for routers
var express = require('express');
var router = express.Router();

//models
var Inventory = require('../models/inventory');
var User = require('../models/user');


//============================
//Main page after login - give the user the lsit of gear to the inventory
//GET list of gear by name listed in the inventory
router.get('/', function(req, res) {
  Inventory.find({}, function(err, foundInventory){
    res.render('inventory/index.ejs', {inventory: foundInventory});
  });
  // res.send('landing on index page');
});

//============================

//Gear listed by location (Lake house, main house, storage)
//Get /inventory/location
// router.get('/location')


//gear listed by activity

//NEW route -- this has to be listed BEFORE the show route!!
router.get('/new', function(req, res) {
  console.log('This is the new route!');
  res.render('inventory/new.ejs');
});

//Route to create a new piece of Gear in the inventory
//POST /inventory
router.post('/', function(req, res) {
  console.log(req.body);
  Inventory.create(req.body, function(err, inventory) {
    // if (err) { console.log(err) }
    res.redirect('/');
  });
});

// Show Gear Route
router.get('/:id', function(req, res) {
  console.log('This is the show route!');
  Inventory.findById(req.params.id, function(err, inventory) {
      if(err) {
      console.log(err);
    } else {
      res.render('inventory/show.ejs', { inventory: inventory });
    // res.render('inventory/show.ejs');
    }
  });
});


// Delete Route for a piece of gear in the inventory
router.delete(':/id', function(req, res){
  Inventory.find({'inventory._id':req.params.id}, function(err, foundInventory){
    for(var i = 0; i < foundInventory.length; i++){
      foundInventory[i].inventory.id(req.params.id).remove();
      foundInventory[i].save();
  }
  Inventory.findByIdAndRemove(req.params.id, function() {
    res.redirect('/inventory');
    })
  });
});


//Route to show a user's inventory of gear


//need a router.get here
// router.get('/new',)
router.get('/:id/edit', function(req, res){
  Inventory.findById(req.params.id, function(err, foundInventory){
    res.render('inventory/edit.ejs', { inventory: foundInventory
    });
  });
})

//Update Route for the inventory list
router.put('/:id', function(req, res) {
  Inventory.findByIdAndUpdate(req.param.id, req.body, {new:true},
    function(err, inventory) {
      console.log('The inventory: ', inventory);
      res.render('/inventory' + inventory.id);
  });
});



//Export the routers
module.exports = router;
