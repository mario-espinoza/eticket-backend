'use strict';

var mongoose = require('mongoose');

var saleSchema = mongoose.Schema({
  date:  {type: String, required:true},
  store: {type: Number, required:true},
  state: {type: String, required:true},
  client: {type: Number, required:true}
});

module.exports = mongoose.model('sales', saleSchema );
