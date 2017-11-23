const http = require('http');

http.createServer(function (req, res) {

  console.log('Request!');

  res.statusCode = 200;
  res.write('Hello world!');
  res.end();

}).listen(3005);