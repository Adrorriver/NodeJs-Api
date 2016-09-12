var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var apiController = require('./controllers/apiController');
var setupController = require('./controllers/setupController');

var port = process.env.PORT || 3000;

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);