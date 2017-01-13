var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function(request, response) {
	console.log(__dirname);
	response.sendFile(__dirname + "/" + "index.html");
});


app.get('/process_get', function(request, response) {
	responseJson = {
		first_name:request.query.first_name,
		last_name:request.query.last_name
	};
	console.log(responseJson);
	response.end(JSON.stringify(responseJson));
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("address url : http://%s:%s", host, port);
});