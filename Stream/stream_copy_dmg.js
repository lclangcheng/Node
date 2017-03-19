var fs = require('fs');

var readStream = fs.createReadStream("QQ_V5.4.1.dmg");
var writeStream = fs.createWriteStream("QQ_copy.dmg");

readStream.on("data", function(chunk) {
	if (writeStream.write(chunk) === false) {
		console.log("readStream pause");
		readStream.pause();
	}
});

readStream.on("end" ,function() {
	console.log("end");
	writeStream.end();
});

writeStream.on("drain", function() {
	console.log("data drain");
	readStream.resume();
});