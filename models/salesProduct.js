'use strict';

var mongoose = require('mongoose');

var salesProductSchema = mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994
  _sale:  {type: Number, required:true},
  _units: {type: Number, required:true},
  _product: {type: String, required:true},
  _client: {type: Number, required:true}
<<<<<<< HEAD
=======
  sale:  {type: Number, required:true},
  units: {type: Number, required:true},
  product: {type: String, required:true},
  client: {type: Number, required:true}
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
=======
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994
});

module.exports = mongoose.model('salesProducts', salesProductSchema );
