
var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end(util.inspect(url.parse(request.url, true)));	
}).listen(3000);
