// const { resolveSoa } = require('dns');
var http = require('http');

var options = {
    host: 'localhost',
    port: 8200,
    path: '/'
};

http.get(options, function(res){
    console.log('status Code: ' + res.statusCode);
    if(res.statusCode === 200 || res.statusCode === 301){
        console.log('El servidor se encuentra activo! ');
    } else {
        console.log('El servidor esta fuera de servicio: ' + res.statusCode);
    }
}).on('error', function(err){
    console.error('Ocurrio un error en la invocación: '+ err.message);
});