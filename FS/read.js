
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Ready to open existing file!");

fs.open("input.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}

	console.log("Open file successfully!");
	console.log("Ready to read file");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if (err) {
			return console.error(err);
		}
		console.log(bytes + " bytes to be read.");
		
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}
	});
});


