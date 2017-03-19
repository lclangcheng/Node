
var fs = require("fs");

console.log("ls /temp document");
fs.readdir("./temp", function(err, files){
	if (err) {
		return console.error(err);
	}
	files.forEach(function (file) {
		console.log(file);
	});
});
