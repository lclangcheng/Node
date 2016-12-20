
var hello = require("./ModuleHello");
hello.world();


var Hello = require("./ModuleHello2");
var hello = new Hello();
hello.setName("llc");
hello.sayHello();
