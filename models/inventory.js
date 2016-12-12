//require mongoose
var mongoose = require('mongoose');

//declare the schema in a variable
var Schema = mongoose.Schema;

//write out the schema for the inventory here

var inventorySchema = new Schema({
  Name: String,
  Location: String,
  Activity: String,
  Owner: String
});



//add the model
var Inventory = mongoose.model('Inventory', inventorySchema);

//export the inventory
module.exports = Inventory;
