'use strict';

var mongoose = require('mongoose');
var port = 3700;
var app = require ('./app');


mongoose.Promise = global.Promise;

// Conectando a la base de datos.
mongoose.connect('mongodb://localhost:27017/', {useMongoClient:true})
        .then(() => {
            console.log('Connection found');
                app.listen(port, () => {
                    console.log('El servidor local corre en localhost:3700')
                });
        })
        .catch( err => console.log(err) );
;

