
var buf = new Buffer(256);
var len = buf.write("www.baidu.com");

console.log("input bit size:" + len);


var buf1 = new Buffer(26);
for (var i = 0; i < 26; i++)
{
	buf1[i] = i + 97;
}


console.log(buf1.toString('ascii'));
console.log(buf1.toString('ascii', 0, 5));
console.log(buf1.toString('utf8', 0, 5));
console.log(buf1.toString(undefined, 0, 5));

var buf2 = new Buffer("www.baidu.com");
var json = buf2.toJSON(buf2);
console.log(json);

var buffer1 = new Buffer("my first buffer demo");
var buffer2 = new Buffer("www.lc.com");
var buffer3 = new Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content is : " + buffer3.toString());

//Node.js v0.12.2 support
//var bufer1 = new Buffer("ABC");
//var buffer2 = new Buffer("ABCD");
//var result = buffer1.compare(buffer2);

//if (result < 0) {
//	console.log(buffer1 + "in the" + buffer2 + "before");
//} else if (result == 0) {
//	console.log(buffer1 + "equal" + buffer2);
//} else {
//	console.log(buffer1 + "in the" + buffer2 + "after");
//}

var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

var buffer1 = new Buffer("www.lc.com");
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
console.log("buffer1 content: " + buffer1.toString("utf8", 0, 2));

var buffer1 = new Buffer("www.lc.com");
console.log("buffer length: " + buffer1.length);
