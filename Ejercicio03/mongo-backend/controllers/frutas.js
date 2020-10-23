'use strict'

const fruta = require('../models/fruta');
var Fruta = require('../models/fruta');

function pruebas(req, res) {
    res.status(200).send({
        mensaje: 'Esta ruta es de prueba de API Rest'
    });
}

function deleteFruta(req, res){
    var frutaId = req.params.id;
    Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutaRemoved){
                res.status(200).send({
                    fruta: frutaRemoved
                });
            }else{
                res.status(404).send({
                    message: 'Sin Frutas'
                });
            }
        }
    });
} 

function updateFruta(req, res) {
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, {new: true} ,(err, frutaUpdated) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutaUpdated){
                res.status(200).send({
                    fruta: frutaUpdated
                });
            }else{
                res.status(404).send({
                    message: 'Sin Frutas'
                });
            }
        }
    });
}

function getFruta(req, res) {
    var frutaId = req.params.id;
    Fruta.findById(frutaId).exec((err, frutas) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutas){
                res.status(200).send({
                    frutas   
                });
            }else{
                res.status(404).send({
                    message: 'Sin Frutas'
                });
            }
        }
    });
}

function getFrutas(req, res) {
    Fruta.find({}).sort({'_id': -1}).exec((err, frutas)=> {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutas){
                res.status(200).send({
                    frutas   
                });
            }else{
                res.status(404).send({
                    message: 'Sin Frutas'
                });
            }
        }
    });
}

function saveFruta(req, res){
    var fruta = new Fruta();
    var params = req.body;
    if(params.nombre){
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) => {
            if(err) {
                res.status(500).send({
                    message: 'Error en el servidor'
                });
            } else {
                if(frutaStored){
                    res.status(200).send({
                        fruta: frutaStored
                    });
                } else {
                    res.status(200).send({
                        message: 'No se ha guardado la fruta'
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'El nombre es obligatorio'
        });
    }
}

module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};