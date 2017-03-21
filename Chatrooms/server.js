var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var cache = {};
var chatServer = require('./lib/chat_server.js');

function send404(res) {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.write('Error 404: resource not found.');
	res.end();
}

function sendFile(res, filePath, fileContents) {
	res.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
	res.end(fileContents);
}

function serverStatic(res, cache, absPath) {
	if (cache[absPath]) {
		sendFile(res, absPath, cache[absPath]);
	} else {
		fs.readFile(absPath, function(error, data) {
			if (error) {
				if (error.code === 'ENOENT') {
					send404(res);
				} else {
					throw error;
				}
			} else {
				cache[absPath] = data;
				sendFile(res, absPath, data);
			}
		})
	}
}

var server = http.createServer(function(req, res) {
	var filePath = false;
	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + req.url;
	}

	var absPath = './' + filePath;
	serverStatic(res, cache, absPath);
})

server.listen(3000, function() {
	console.log('Server listening on port 3000');
})

chatServer.listen(server);