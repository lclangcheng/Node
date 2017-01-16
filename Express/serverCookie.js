
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(request, response) {
	console.log("Cookies: ", request.cookies);
});

app.listen(8081);