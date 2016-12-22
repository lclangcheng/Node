

var fs = require("fs");

//async

fs.readFile("input.txt", function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log("async readFile " +  data.toString());
});


var data = fs.readFileSync("input.txt");
console.log("sync readFile " + data.toString());

console.log("end.");
