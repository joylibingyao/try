
var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client')));

app.listen(8080, function() {
  console.log('cool stuff on: 8008');
});
