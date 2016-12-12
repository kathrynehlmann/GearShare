//require  dependencies

var mongoose = require('mongoose');

//require the schema for the inventory
var inventorySchema = require('../models/inventory').schema;

var Schema = mongoose.Schema;

//Declare the user schema
var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  inventory: [inventorySchema]
});

//=================================
//password hashing and authentication

//before each time a user is saved check to see if the password has been added or modified, and if it has, hash the password and store it

//code to be used at signup when creating a new user


//Method for comparing the provided password with the stored hased password.
//used when an existing user account is logging in or authenticating.


//=================================

//Sorting the gear arrays



//sorting inventory by name



//sorting inventory by location


//sorting inventory by activity

//==============================
//create the User model
var User = mongoose.model('User', userSchema);

//export the model
module.exports = User;
