'use strict';

var productsLib = require('../../../lib/productsLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    productsLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

<<<<<<< HEAD
<<<<<<< HEAD
  router.get('/:code', function (req, res) {

    var code = req.params.code;

    productsLib.getByCode(code, function(error, product){
=======
  router.get('/:id', function (req, res) {
=======
  router.get('/:code', function (req, res) {
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994

    var code = req.params.code;

<<<<<<< HEAD
    productsLib.getById(id, function(error, product){
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
=======
    productsLib.getByCode(code, function(error, product){
>>>>>>> 8138c36913f821d7f0f86cb0c5e69d3abe8c7994

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(product).end();

    });
  });

  router.post('/', function (req, res) {

    var newProduct = req.body;

    productsLib.create(newProduct, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    productsLib.update(id, newData, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(product).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    productsLib.delete(id, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(204).end();

    });
  });


};
