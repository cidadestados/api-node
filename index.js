var express             = require ('express')
    , readJSONFileSync  = require ('./helpers/readJSONFileSync')
    , app               = express()
    , router            = express.Router()

app.set('port', process.env.PORT || 4000);

app.get('/estados/', function (request, response) {
  var content = readJSONFileSync(__dirname + '/data/cities-states.json');

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(content, null, 3));
});

var server = app.listen(app.get('port'), function () {
  console.log('Express server is listening on port ' + server.address().port);
});