'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  _name: {type: String, required:true},
  _lname1: {type: String, required:true},
  _lname2: {type: String, required:true},
  _phone: {type: String, required:true},
  _password: {type: String, required:true},
  _mail: {type: String, index: {unique: true, dropDups: true}}
});

module.exports = mongoose.model('clients', clientSchema );
