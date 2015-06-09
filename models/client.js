'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  _name: {type: String, required:true},
  _firstLastame: {type: String, required:true},
  _secondLastame: {type: String, required:true},
  _phone: {type: String, required:true},
  _password: {type: String, required:true},
  _mail: {type: String, index: {unique: true, dropDups: true}},
  _address: [{
       _line1: {type: String, required:true},
       _line2: {type: String, required:false},
       _county: {type: String, required:true},
       _city: {type: String, required:true},
       _region: {type: String, required:true}
       }],
});

module.exports = mongoose.model('clients', clientSchema );
