
var os = require("os");

//CPU 
console.log('endianness :' + os.endianness());

//system name
console.log("type : " + os.type());

//platform
console.log("platform : " + os.platform());

//total memory
console.log("total memory : " + os.totalmem() + " bytes.");

//free memory
console.log("free memory : " + os.freemem() + " bytes.");

//arch
console.log("arch : " + os.arch());

//release
console.log("release : " + os.release());

//cpus
console.log("cpus : " + os.cpus());

//networkInerfaces
console.log("networkInterfaces : " + os.networkInterfaces());
