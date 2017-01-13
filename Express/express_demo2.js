
var express = require('express');
var app = express();

app.get('/', function(request, response) {
	console.log('home page GET request');
	response.send('Hello GET');
});

app.post('/', function(request, resposne) {
	console.log('Home page POST request');
	response.send('Hello POST');
});

app.get('/del_user', function(request, response) {
	console.log('del_user');
	response.send('del_user');
});


app.get('/list_user', function(request, response) {
	console.log('list_user GET request');
	response.send('list_user');
});


app.get('/ab*cd', function(request, response) {
	console.log('ab*cd GET request');
	response.send('ab*cd GET request');
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('request url: hhtp://%s:%s', host, port);
});
