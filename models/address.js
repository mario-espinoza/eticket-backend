'use strict';

var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994
  _line1: {type: String, required:true},
  _line2: {type: String, required:false},
  _county: {type: String, required:true},
  _city: {type: String, required:true},
  _region: {type: String, required:true}
<<<<<<< HEAD
=======
  line1: {type: String, required:true},
  line2: {type: String, required:false},
  county: {type: String, required:true},
  city: {type: String, required:true},
  region: {type: String, required:true}
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
=======
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994
});

module.exports = mongoose.model('addresses', addressSchema );
