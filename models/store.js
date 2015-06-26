'use strict';
var mongoose = require('mongoose');

var storeSchema = mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994
  _name:  {type: String, required:true},
  _lat: {type: Number, required:true},
  _lon: {type: Number, required:true},
  _address: {type: String, required:true}
<<<<<<< HEAD
=======
  name:  {type: String, required:true},
  lat: {type: Number, required:true},
  lon: {type: Number, required:true},
  address: {type: String, required:true}
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
=======
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994
});

module.exports = mongoose.model('stores', storeSchema );
