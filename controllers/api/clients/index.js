    // /*Version Hasheada*/
    // router.post('/', function(req, res, next) {
    //     var user = new clientsLib.ClientModel();
    //     user.username = req.body.username;
    //     user.booklist = [] ;
    //     bcrypt.hash(req.body.password, 10, function (err, hash) {
    //         user.password = hash;
    //         user.save(function(err,user) {
    //             if(err) { return(next(err)); }
    //             res.status(200).send();
    //         });
    //     });
    // });

    /*Version Hasheada*/
    // router.post('/api/login', function(req, res, next) {
    //     clientsLib.findOne({username: { $in: [req.auth.username] } })
    //     .select('password').select('username')
    //     .exec(function (err, user) {
    //         if (err) { return next(err); }
    //         if (!user) { return res.status(401).send(); }
    //         bcrypt.compare(req.body.password, user.password, function (err, valid) {
    //             if (err) { return next(err); }
    //             if (!valid) { return res.status(401).send(); }
    //             var token = jwt.encode({username: user.username}, mysecret.secret);
    //             res.status(200).send(token);
    //         });
    //     });
    // });

/**********/
'use strict';

var clientsLib = require('../../../lib/clientsLib');
var mysecret = require('../../../config/secret');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = function (router) {
    router.get('/', function (req, res) {
	//If access token was not sent in the query string ej: api/login?who=google&access_token=wrwerwqer
        //Then return a 401
        if(!req.query || !req.query.thirdparty || !req.query.userid || !req.query.accesstoken){
            return res.status(401).end();
        }

	//Validate the access token with the third party (ej: google)
            clientsLib.validateThirdPartyAccessToken(req.query.who, req.query.accesstoken, function(error){
            if (error){
                return res.status(401).end();
            }

            //Get the JWToken
            clientsLib.getToken(req.query.userid, function(error, token){
                return res.status(200).json({'token': token}).end();
            });
        });

        clientsLib.getAll(function(error, results){
            res.setHeader('Access-Control-Allow-Origin','*');
            if (error){
                return res.status(500).json(error).end();
            }
            res.status(200).json(results).end();
        });
    });

    router.post('/', function (req, res) {
        var data=req.body;
        var username=data._username;
        var password=data._password; //hash md5, over SSL

        clientsLib.findOne(data._username, data._password, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                var newClient = data;
                clientsLib.create(newClient, function(error){
                    if (error){
                        return res.status(500).json(error).end();
                    }
                    return res.status(201).end();
                });
                }
                return res.status(401).json({message: 'USER_OR_PASSWORD_NOT_FOUND'}).end();
            }
            if (error){
                return res.status(500).json(error).end();
            }
            console.log(client);
            clientsLib.getToken(client.id, function(error, token){
                return res.status(201).json({'token': token}).end();
            });
        });
    });

    router.get('/:_mail', function (req, res) {
        var mail = req.params._mail;
        clientsLib.getByMail(mail, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });

    router.put('/:id', function (req, res) {
        var id = req.params.id;
        var newData = req.body;
        clientsLib.update(id, newData, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });

    router.delete('/:id', function (req, res) {
        var id = req.params.id;
        clientsLib.delete(id, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(204).end();
        });
    });

    router.get('/:_mail/:_address', function (req, res) {
        var mail = req.params._mail;
        var address = req.params._address;
        clientsLib.getByMail(mail, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });
};
