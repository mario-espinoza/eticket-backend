'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var clientSchema = new Schema({
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
       }]
});

clientSchema.pre('save', function(next) {
    var client = this;

    // only hash the password if it has been modified (or is new)
    if (!client.isModified('_password')) {
        return next();
    }

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(client._password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            client._password = hash;
            next();
        });
    });
});

clientSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this._password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('clients', clientSchema );
