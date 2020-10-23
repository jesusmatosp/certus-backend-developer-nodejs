var http = require('http');
var url = require('url');

const host = '127.0.0.1';
const port = 4000;

const requestListener = function(req, res){
    var pathname = url.parse(req.url).pathname;
    var status = 200;

    var data = "{}";
    
    if( pathname === '/'){
        data = `{"message":"Bienvenido al mundo de node.js", "autor":"Jesus", "path":"http://localhost:4000"}`
    } else if (pathname === '/hello') {
        data = `{"message":"Esta página le enviara un saludo especial", "pagina":"Pagina de Bienvenida", "version":"1.0"}`
    } else {
        data = `{"message":"Página no encontrada"}`
        status = 404;
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("autor", "Jesus");
    res.writeHead(status);
    res.end(data);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Servidor iniciado en http://'+host+':' + port);
});