
var fs = require("fs");

//async
console.log("Ready to open the file.");

fs.open("input.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("Open the file successfully.");
});


var fs = require("fs");

fs.stat("./File.js", function(err, stats) {
	console.log("File.js file is File ? " + stats.isFile());
});


var fs = require("fs");

console.log("ready to open the File");
fs.stat("./input.txt", function(err, stats) {
	if (err) {
		return console.error(err);
	}

	console.log(stats);
	console.log("Open the file successfully.");
	
	//check the file type
	console.log("is file ? " + stats.isFile());
	console.log("is directory ? " + stats.isDirectory());
}); 
