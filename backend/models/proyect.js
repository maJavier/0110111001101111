'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema para los proyectos.
var ProyectSchema = Schema({
    version : String,
    description: String,
    date : Date
});

module.exports = mongoose.model('Proyect', ProyectSchema);