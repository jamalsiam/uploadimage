var express = require('express');

var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );   
app.use(bodyParser.urlencoded({
	extended: true
})); 


app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/app'));

app.set('view engine', 'ejs');







app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


