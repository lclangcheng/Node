
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/indexPOST.html', function(request, response) {
	response.sendFile(__dirname + '/' + 'indexPOST.html');
});

app.post('/process_post', urlencodedParser, function(request, response) {
	responseJSON = {
		first_name:request.body.first_name, 
		last_name:request.body.last_name
	};
	console.log(responseJSON);
	response.end(JSON.stringify(responseJSON));
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('address url: http://%s:%s', host, port);
});