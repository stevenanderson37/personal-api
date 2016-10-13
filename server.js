var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);









var port = 3000;
app.listen(port, function() {
  console.log("I am listening to " + port);
