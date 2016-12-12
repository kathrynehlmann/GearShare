//Dependancies - Requiring node packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Using express
var app = express();

//port
var port = process.

//Database URI
mongoose.connect('mongodb://localhost:27017');
//connect and log a message to know that the database is connected
mongoose.connection.once('open', function(){
  console.log('connected to mongo database');
});


//===========================================
//Controllers
var inventoryContoller = require('./contollers/inventoryController.js');
app.use('/inventoryContoller', inventoryContoller);

var userController = require('./contollers/userController.js');
app.use('/userController', userController);


//===========================================
//Middleware



//===========================================
// Root Route
app.get('/', function(req, res){
  res.redirect('/');
});

//===========================================
// Register

//Signup Form

//Get /signup


//logout
// GET /logout

//End Register
//===========================================




//Listening to port
app.listen(3000, function(){
  console.log('GearShare is listening...');
});
