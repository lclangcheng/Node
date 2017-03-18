
var fs = require("fs");

console.log("ready to wirte file.");

fs.writeFile("input.txt", "say something!", function(err) {
	if (err) {
		return console.error(err);
	}
	
	console.log("write data successfully.");
	
	console.log("-------------------------");

	console.log("ready to read");

	fs.readFile("input.txt", function(err, data) {
		if (err) {
			return console.error(err);
		}	
		console.log("sync read data " + data.toString());
	});
});
