
function Hello() {
	var _name;
	this.setName = function (name) {
		_name = name;
	};
	this.sayHello = function () {
		console.log("Hello " + _name);
	};
};

module.exports = Hello;


