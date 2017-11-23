const http = require('http');
const fs = require('fs');

fs.readFile('./exemplo5/document.html', function (err, document) {
  http.createServer(function (req, res) {

    console.log('Request!');

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(document);
    res.end();

  }).listen(3005);
});