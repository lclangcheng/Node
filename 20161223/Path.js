
var path = require("path");

//normalize
console.log("normalization : " + path.normalize('test/test1//2slashes/lslash/tab/../.'));

//path.join
console.log("joint path : " + path.join('/test', 'test1', '2slashes/slash', 'tab', '..'));

//resolve
console.log('resolve : ' + path.resolve("OS.js"));

//ext name
console.log("ext name : " + path.extname("OS.js"));
