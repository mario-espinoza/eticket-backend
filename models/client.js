'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: {type: String, required:true},
  lname1: {type: String, required:true},
  lname2: {type: String, required:true},
  phone: {type: String, required:true},
  password: {type: String, required:true},
  mail: {type: String, required:true}
});

module.exports = mongoose.model('clients', clientSchema );
