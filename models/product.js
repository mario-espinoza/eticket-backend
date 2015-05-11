'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name:  {type: String, required:true},
  price: {type: Number, required:true},
  code: {type: String, index: {unique: true, dropDups: true}}
});

module.exports = mongoose.model('products', productSchema );
