'use strict';

var mongoose = require('mongoose');

var clientAddressSchema = mongoose.Schema({
  _client: {type: String, required:true},
  _address: {type: String, required:true}
});

module.exports = mongoose.model('clientAdresses', clientAddressSchema );
