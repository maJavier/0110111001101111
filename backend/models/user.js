'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema para usuario.
var UserSchema = Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    proyect: { type: Schema.ObjectId, ref: 'Proyect' }
});

module.exports = mongoose.model('User', UserSchema);
