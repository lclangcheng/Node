
var http = require('http');
var fs = require('fs');
var url = require('url');

//create server
http.createServer(function(request, response) {
	//parse request
	var pathname = url.parse(request.url).pathname;

	console.log('Request for ' + pathname + 'received.');
	
	//The content of the files from the file system read request.
	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err);
			//http state 404: NOT FOUND
			//Content Type:  text/plain
			response.writeHead(404, {'Content-type': 'text/html'});
		} else {
			//http state 200 :OK
			//Content Type: text/plain
			response.writeHead(200, {'Content-type': 'text/html'});
			//response file content
			response.write(data.toString());
		}
		//send response data
		response.end();
	});
}).listen(8081);

//console printf log
console.log('Server running at http://127.0.0.1:8081/');
