'use strict';

var mongoose = require('mongoose');
var port = 3700;
var app = require ('./app');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/', {useMongoClient:true})
        .then(() => {
            console.log('Connection found');
                app.listen(port, () => {
                    console.log('El servidor local con node y express esta corriendo correctamente en el puerto localhost:3700')
                });
        })
        .catch( err => console.log(err) );
;

