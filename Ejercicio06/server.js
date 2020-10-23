var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-type': 'text/csv',
        'content-Disposition': 'attachment;filename=prueba.csv',
        'X-Certus-app-name':'csv export',
        'X-Certus-app-secret':'123456'
    });

    res.end('id,name,email\n1,Juan Perez,jperez@certus.edu.pe\n2,Natalia Vera,nvera@certus.edu.pe\n3,Patricia,Suarez,psuarez@certus.edu.pe\n');
}).listen(3200, "127.0.0.1");
console.log('Servidor iniciado en http://localhost:3200');