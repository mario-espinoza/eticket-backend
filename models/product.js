'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  _name:  {type: String, required:true},
  _price: {type: Number, required:true},
  _code: {type: String, index: {unique: true, dropDups: true}},
  _tags: [{ type: String, index: true }]

  name:  {type: String, required:true},
  price: {type: Number, required:true},
  code: {type: String, index: {unique: true, dropDups: true}}

});

module.exports = mongoose.model('products', productSchema );
