const express = require('express');
const app = express();
const morgan = require('morgan')
app.use(morgan('combined'))
var server = require('http').Server(app);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(9000);
