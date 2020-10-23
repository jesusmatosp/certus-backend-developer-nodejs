var http = require('http');
var fs = require('fs').promises;
var url = require('url');

const host = '127.0.0.1';
const port = 3000;

const requestListener = function(req, res){
    // http://localhost:3000/productos
    // pathname : productos
    var pathname = url.parse(req.url).pathname;
    console.log('pathname:' + pathname);
    var page = '';
    var status = 200;
    
    if( pathname === '/'){
        page = 'index.html';
    } else if (pathname === '/about') {
        page = 'about.html';
    } else if(pathname === '/success'){
        page = 'success.html'
    } else {
        page = 'error.html';
        status = 404;
    }

    fs.readFile(page).then(contents => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(status);
        res.end(contents);
    }).catch( err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Servidor iniciado en http://'+host+':' + port);
});