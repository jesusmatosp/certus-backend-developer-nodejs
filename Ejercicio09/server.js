var http = require('http');
var url = require('url');

const host = '127.0.0.1';
const port = 8100;

const requestListener = function(req, res){
    var pathname = url.parse(req.url).pathname;
    var status = 200;

    var data = "";
    
    if( pathname === '/about.html'){
        status = 301;
        res.setHeader("Location", "https://www.certus.edu.pe");
        res.writeHead(status);
        res.end();
    } else {
        data = '<html><body><h1>Ok! aun me quedare por aca</h1></body></html>';
        status = 200;
        res.setHeader("Content-Type", "text/html");
        res.writeHead(status);
        res.end(data);
    }
    
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Servidor iniciado en http://'+host+':' + port);
});