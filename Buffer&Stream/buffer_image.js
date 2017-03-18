var fs = require('fs');

fs.readFile("nodeIcon.jpg", function(err, origin_buffer){
	if (err) {
		console.log(err);
	}

	console.log(Buffer.isBuffer(origin_buffer));

	fs.writeFile("nodeIcon2.jpg", origin_buffer, function(err){
		if (err) {
			console.log(err);
		}
	})

	var base64Image = origin_buffer.toString('base64');
	var decodedImage = new Buffer(base64Image, 'base64');

	fs.writeFile("nodeIcon3.jpg", decodedImage, function(err) {
		if (err) {
			console.log(err);
		}
	});
})