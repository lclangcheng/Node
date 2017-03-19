
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Ready to open File!");

fs.open("input.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}

	console.log("Open file successfully!");
	
	console.log("Intercept after 5 bytes of the file content.");
	fs.ftruncate(fd, 5, function(err) {
		if (err) {
			console.error(err);
		}
		
		console.log("ftruncate file successfully!");
		console.log("read the file.");	
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
			if (err) {
				console.error(err);
			}
			if (bytes > 0) {
				console.log(buf.slice(0, bytes).toString());
			}
			 
			fs.close(fd, function(err) {
				if (err) {
					console.error(err);
				}
				console.log("close file successfully.");
			});
		});	
	});
});
