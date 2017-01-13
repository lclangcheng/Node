var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('iamge'));

app.get('/indexUpload.html', function(request, response) {
	response.sendFile(__dirname + '/' + 'indexUpload.html');
});

app.post('/file_upload', function(request, response) {
	console.log(request.files[0]);
	var des_file = __dirname + "/" + request.files[0].originalname;
	fs.readFile(request.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				responseJSON = {
					message:'File uploaded successfully',
					filename:request.file[0].originalname
				};
			}
			cosnole.log(responseJSON);
			response.end(JSON.stringify(responseJSON));
		});
	});
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('address url : http://%s:%s', host, port);
})