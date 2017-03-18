
var express = require('express');
var app = express();

app.get('/', function(request, response) {
	console.log('Home page GET request');
	response.send('Hello Get request');
});


app.post('/', function(request, response) {
	console.log('Home page POST request');
});


app.get('/del_user', function(request, response) {
	console.log('/del_user response DELETE request');
	response.send('delete page');
});
23
app.get('/list_user', function(request, response) {
	console.log('list_user GET request');
	response.send('list_user page');
});

app.get('/ab*cd', function(request, response) {
	console.log('/ab*cd GET request');
	response.send('Regular match');
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Address : http://%s:%s', host, port);
});
