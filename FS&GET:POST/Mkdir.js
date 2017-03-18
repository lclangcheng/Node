
var fs = require("fs");

console.log("Create document /temp/test");

fs.mkdir("./temp/test", function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("Create document successfully");
});
