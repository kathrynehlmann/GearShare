//Dependancies - Requiring node packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Using express
var app = express();

// //Using ejs
app.set('view engine', 'ejs');

//===========================================
//Middleware
app.use(methodOverride('_method')); //preparing to allow POST PUT DELETE from a Form
app.use(bodyParser.urlencoded({ extended:false })); //req.body
app.use(bodyParser.json()); // req.bodyParser and use JSON


//===========================================

//port
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gearshare';

//Database URI
mongoose.connect(mongoDBURI);
//connect and log a message to know that the database is connected
mongoose.connection.once('open', function(){
  console.log('connected to mongo database');

  //Listening to port
  app.listen(port, function(){
    console.log('GearShare is listening on port...' + port);
  });
// Test the schema -- to be commented out after successful tests
// console.log('Testing mongoose schema . . .');
// var Inventory = require('./models/inventory');
//
// var newData = { Name: "Skis" }
//
// Inventory.create(newData, function(err, createdInventory) {
//   if (err) { console.log ('error is: ', err) }
//   console.log(createdInventory);
// });

}); //end of URI


//===========================================
//Controllers
var inventoryController = require('./controllers/inventoryController');
app.use('/inventory', inventoryController);

var userController = require('./controllers/userController');
app.use('/user', userController);



// Root Route
app.get('/', function(req, res) {
  res.redirect('/inventory');
  // res.send("landing on index page");
});


//===========================================
// Register

//Signup Form

//Get /signup


//logout
// GET /logout

//End Register
//===========================================






//special thanks to https://zellwk.com/blog/crud-express-mongodb/
