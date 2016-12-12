var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();


app.listen(3000, function(){
  console.log('GearShare is listening...');
});
