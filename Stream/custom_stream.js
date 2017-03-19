var stream = require("stream");
var util = require("util");

function ReadStream() {
	stream.Readable.call(this);
}

util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function() {
	this.push("Hi ");
	this.push("man ");
	this.push("over \n");
	this.push(null);
}

function WritStream() {
	stream.Writable.call(this);
}

util.inherits(WritStream, stream.Writable);

WritStream.prototype._write = function(trunk, decode, cb) {
	console.log(trunk.toString());
	cb();
}

function TransformStream() {
	stream.Transform.call(this);
}

util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._transform = function(trunk, decode, cb) {
	this.push(trunk);
	cb();
}

TransformStream.prototype._flush = function(cb) {
	this.push("Oh Yeah!");
	cb();
}

var rs = new ReadStream();
var ws = new WritStream();
var ts = new TransformStream();

rs.pipe(ts).pipe(ws);