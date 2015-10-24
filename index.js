var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

var RESPONSE_TIME = 50;

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  app.use(bodyParser.json());

  app.get('/response-time', function(req, res, next) {
    setTimeout(function() {
      res.send("Done!");
    }, RESPONSE_TIME);
  });

  console.log('Example app listening at http://%s:%s', host, port);
});
