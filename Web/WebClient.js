var http = require('http');

var options = {
	host: '127.0.0.1',
	port: '8081',
	path: '/index.html'
};

var callback = function(response) {
	var body ='';
	response.on('data', function(data) {
		body += data;
	});

	response.on('end', function() {
		console.log(body);
	});

	response.on('error', function(err) {
		console.log(err);
	});
}

var req = http.request(options, callback);
req.end();

