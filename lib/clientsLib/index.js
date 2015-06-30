'use strict';

var bcrypt = require('bcrypt');
var ClientModel = require('../../models/client');
var logger = require('../logger');
var _   = require('underscore');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var secret = require('jsonwebtoken');

var ClientsLib = function(){
    var clients = [];
    var self = this;
    self.getAll = function(callback){
        ClientModel.find().exec(function(error, data){
            callback(error, data);
        });
    };

    self.getById = function(id, callback){
        ClientModel.findOne({_id: id}).exec(function(error, data){
            if(!data){
                return callback(new Error('NOT_FOUND'));
            }
            callback(error, data);
        });
    };

    self.getByMail = function(mail, callback){
        /*if (err) {
            throw err;
        }*/
        ClientModel.findOne({_mail: mail}).exec(function(error, data){
            data.comparePassword(data._password, function(err, isMatch) {
                if (err) {
                    throw err;
                }
                //console.log('Password123:', isMatch); // -> Password123: true
            });
            if(!data){
                return callback(new Error('NOT_FOUND'));
            }
            callback(error, data);
        });
    };

    self.create = function(clientData, callback){

        //var hash= clientData
        var newClient = new ClientModel(clientData);

        newClient.save(function(error, client, numAffected){
            callback(error, client);
        });
    };

    self.update = function(id, newData, callback){
        delete newData._id;
        ClientModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
            if(!result){
                return callback(new Error('NOT_FOUND'));
            }
            callback(error, result);
        });
    };

    self.delete = function(id, callback){
        ClientModel.remove({_id: id}, function(error){
            callback(error, id);
        });
    };

    self.getAddressById = function(id, callback){
        ClientModel.findOne({_id: id}).exec(function(error, data){
            if(!data){
                return callback(new Error('NOT_FOUND'));
            }
            callback(error, data);
        });
    };

	self.findOne = function(mail, password, callback){
        //TODO: refactor. It should been gotten from db and password with a hash md5
        var clients;
        getAll(function(error, results){
            res.setHeader('Access-Control-Allow-Origin','*');
            if (error){
                return res.status(500).json(error).end();
            }
            clients=results;
        });
        var clientsList = _.filter(clients, function(item){
            return (item._mail === mail) && (item._password === password);
        });

        if (clientsList.length > 0){
            callback(null, clientsList[0]);
        } else {
            callback(new Error('NOT_FOUND'));
        }
    };

    self.getToken = function(id, callback){
        //TODO: refactor. get secret string from a configuration file
        var secret = 'secretpass';
        var token = jwt.sign(id, secret, {
            expiresInMinutes: 1440 // expires in 24 hours
        });
        callback(null,token);
    };

    self.validateThirdPartyAccessToken = function(thirdParty, accessToken, callback){
        //You will earn +0.5 point if you figure out how to validate the access token with
        //google api
        callback(null);
    };
};

module.exports = new ClientsLib();
