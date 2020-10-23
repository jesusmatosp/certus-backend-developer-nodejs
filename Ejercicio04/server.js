var http = require('http');
http.createServer(function(req, res){
    res.writeHead(301, {
        'Location': 'https://www.certus.edu.pe'
    });
    res.end('Hola Mundo \n');
}).listen(3000, "127.0.0.1");
console.log('Servidor iniciado en http://localhost:3000');