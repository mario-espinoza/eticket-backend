'use strict';

var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
  line1: {type: String, required:true},
  line2: {type: String, required:false},
  county: {type: String, required:true},
  city: {type: String, required:true},
  region: {type: String, required:true}
});

module.exports = mongoose.model('addresses', addressSchema );
