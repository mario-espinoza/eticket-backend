'use strict';
var mongoose = require('mongoose');

var storeSchema = mongoose.Schema({
<<<<<<< HEAD
  _name:  {type: String, required:true},
  _lat: {type: Number, required:true},
  _lon: {type: Number, required:true},
  _address: {type: String, required:true}
=======
  name:  {type: String, required:true},
  lat: {type: Number, required:true},
  lon: {type: Number, required:true},
  address: {type: String, required:true}
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
});

module.exports = mongoose.model('stores', storeSchema );
