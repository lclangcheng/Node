
var fs = require("fs");

console.log("Ready to delete file!");
fs.unlink("delete.txt", function(err) {
	if (err) {
		return console.error(err);
	}
	
	console.log("Delete file successfully.");
});
