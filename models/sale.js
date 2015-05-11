'use strict';

var mongoose = require('mongoose');

var saleSchema = mongoose.Schema({
  date:  {type: String, required:true},
  store: {type: String, required:true},
  status: {type: String, required:true},
  client: {type: String, required:true},
  total: {type: Number, required:true}
});

module.exports = mongoose.model('sales', saleSchema );
