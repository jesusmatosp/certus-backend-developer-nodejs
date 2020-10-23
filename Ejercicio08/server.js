var http = require('http');
const port = 5200;
http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end('<html><header><meta http-equiv="refresh" content="2; url=https://www.certus.edu.pe" />' +
           '</header><body><h1>Pagina se encuentra en mantenimiemto</h1></body></html>');
}).listen(port, "127.0.0.1");
console.log('Servidor iniciado en http://localhost:' + port);