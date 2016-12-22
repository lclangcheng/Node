
var http = require("http");
var querystring = require("querystring");
var util = require("util");

http.createServer(function(request, response) {
	var post = '';
	
	request.on("data", function(chunk) {
		post += chunk;
	});
	
	request.on("end", function() {
		post = querystring.parse(post);
		response.end(util.inspect(post));
	});
}).listen(3000);
