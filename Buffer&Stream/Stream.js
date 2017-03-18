
var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function (chunk) {
	data += chunk;
});

readerStream.on("end", function (){
	console.log(data);
});

readerStream.on("error", function (err) {
	console.log(err);

});

console.log("termination routine");


var fs = require("fs");
var data = "www.lc.com"

var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, "UTF8");
writerStream.end();

writerStream.on("finish", function () {
	console.log("done");
});

writerStream.on("error", function (err) {
	console.log(err.stack);
});

console.log("termination routine!");

//var fs = require("fs");
//var readerStream = fs.createReadStream("input.txt");
//var writerStream = fs.createWriteStream("output.txt");
//readerStream.pipe(writerStream);

//console.log("termination routine!");

//var fs = require("fs");
//var zlib = require("zlib");

//fs.createReadStream("input.txt")
//	.pipe(zlib.createGzip())
//	.pipe(fs.createWriteStream("input.txt.gz"));
//console.log("txt zip done");


var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt.gz")
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));

console.log("txt unZip done");
