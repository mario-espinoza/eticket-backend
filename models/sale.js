'use strict';

var mongoose = require('mongoose');

var saleSchema = mongoose.Schema({
  _date:  {type: Date, default: Date.now},
  _store: {type: String, required:true},
  _status: {type: String, required:true},
  _client: {type: String, required:true},
  _total: {type: Number, required:true}
});

module.exports = mongoose.model('sales', saleSchema );
