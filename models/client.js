'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  nombre: {type: String, required:true},
  apePat: {type: String, required:true},
  apeMat: {type: String, required:true},
  telephone: {type: String, required:true},
});

module.exports = mongoose.model('clients', clientSchema );
