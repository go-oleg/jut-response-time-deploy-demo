var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config');

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  app.use(bodyParser.json());

  app.get('/response-time', function(req, res, next) {
    setTimeout(function() {
      res.send("Done (in approx " + config.responseTime + "ms)!");
    }, config.responseTime);
  });

  console.log('Example app listening at http://%s:%s', host, port);
});
