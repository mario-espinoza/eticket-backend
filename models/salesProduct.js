'use strict';

var mongoose = require('mongoose');

var salesProductSchema = mongoose.Schema({
  sale:  {type: Number, required:true},
  units: {type: Number, required:true},
  product: {type: String, required:true},
  client: {type: Number, required:true}
});

module.exports = mongoose.model('salesProducts', salesProductSchema );
