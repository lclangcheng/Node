var Readable = require("stream").Readable;
var Writable = require("stream").Writable;

var readStream = new Readable();
var writStream = new Writable();

readStream.push("Hi ");
readStream.push("man ");
readStream.push("over \n");
readStream.push(null);

writStream._write = function(chunk, encode, cb) {
	console.log(chunk.toString());
	cb();
}

readStream.pipe(writStream);