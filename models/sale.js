'use strict';

var mongoose = require('mongoose');

var saleSchema = mongoose.Schema({
<<<<<<< HEAD
    _date:  {type: Date, default: Date.now},
    _store: {type: String, required:true},
    _status: {type: String, required:true},
    _client: {type: String, required:true},
    _total: {type: Number, required:true},
    _cart: [{
        _units: {type: Number, required:true},
        _product: {type: String, required:true},
        _discount:  {type: Number, required:true},
        _cost: {type: Number, required:true}
        }]
=======
  date:  {type: Date, default: Date.now},
  store: {type: String, required:true},
  status: {type: String, required:true},
  client: {type: String, required:true},
  total: {type: Number, required:true}
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
});

module.exports = mongoose.model('sales', saleSchema );
