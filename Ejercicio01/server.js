/**
 * Mi primer programa en NodeJS
 * @author jmatos
 */

var http = require('http');
// Creando Server
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Estoy programando en NodeJS \n');
}).listen(8000, '127.0.0.1');

// Imprimiendo resultados.
console.log('Servidor corriendo en http://127.0.0.1:8000/');