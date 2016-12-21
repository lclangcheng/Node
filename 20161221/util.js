var util = require("util");
function Base () {
	this.name = "base";
	this.base = 1991;
	this.sayHello = function() {
		console.log("Hello " + this.name);
	};
};	

Base.prototype.showName = function() {
	console.log(this.name);
};


function Sub() {
	this.name = "sub";
};

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

var util = require("util");
function Person() {
	this.name = "byvoid";
	this.toString = function() {
		return this.name;
	}
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));


var util = require("util");

var bArr = util.isArray([]);
console.log(bArr);
bArr = util.isArray(new Array);
console.log(bArr);
bArr = util.isArray({});
console.log(bArr);


var util = require("util");

var bReg = util.isRegExp(/[xyz]/);
console.log(bReg);

bReg = util.isRegExp(new RegExp('\d'));
console.log(bReg);

bReg = util.isRegExp({});
console.log(bReg);

var util = require("util");

util.isDate(new Date());
//true

util.isDate(Date());
//false

util.isDate({});
//false

console.log(new Date());

var util = require("util");

util.isError(new Error());
//true

util.isError(new TypeError());
//true

util.isError({name: "error", message: "an error ocuurred"});
