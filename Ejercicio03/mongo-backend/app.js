'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar rutas:
var fruta_router = require('./routes/fruta');

// BodyParser:
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS:

// Rutas Base:
app.use('/api', fruta_router);

module.exports = app;