
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Ready to open file!");

fs.open("input.txt", "r+", function(err, fd) {
	if (err) {
		console.error(err);
	}
	console.log("Open file successfully!");
	console.log("Ready to read file");
	
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		if (err) {
			console.error(err);
		}
		
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}

		//close file
		fs.close(fd, function(err) {
			if (err) {
				console.log(err);
			}
			console.log("Close file successfully!");
		});
	});
	

});

