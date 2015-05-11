'use strict';
var mongoose = require('mongoose');

var storeSchema = mongoose.Schema({
  name:  {type: String, required:true},
  lat: {type: Number, required:true},
  lon: {type: Number, required:true},
  address: {type: String, required:true}
});

module.exports = mongoose.model('stores', storeSchema );
