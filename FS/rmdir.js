
var fs = require("fs");

console.log("Ready to delete /temp/test");

fs.rmdir("./temp/test", function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("Read /temp document");
	
	fs.readdir("./temp", function(err, files){
		if (err) {
			return console.error(err);
		}
		files.forEach(function(file) {
			console.log(file);
		});

	});
});
