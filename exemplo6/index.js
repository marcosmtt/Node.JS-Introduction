const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("Minha primeira rota com Express!");
});

app.get('/hello', function(req, res) {
  res.send("hello!");
});

const server = app.listen(3005);