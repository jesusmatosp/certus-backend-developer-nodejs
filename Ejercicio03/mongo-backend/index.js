'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://192.168.1.10:27017/tienda', { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión a mongodb se ha realizado correctamente!');
        app.listen(port, ()=>{
            console.log('Servidor se ha iniciado en http://localhost:' + port);
        });
    }).catch(err => console.log(err));