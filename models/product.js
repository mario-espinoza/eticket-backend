'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
<<<<<<< HEAD
  _name:  {type: String, required:true},
  _price: {type: Number, required:true},
  _code: {type: String, index: {unique: true, dropDups: true}},
  _tags: [{ type: String, index: true }]
=======
  name:  {type: String, required:true},
  price: {type: Number, required:true},
  code: {type: String, index: {unique: true, dropDups: true}}
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
});

module.exports = mongoose.model('products', productSchema );
