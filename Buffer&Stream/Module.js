
var hello = require("./module_hello");
hello.world();


var Hello = require("./module_hello2");
var hello = new Hello();
hello.setName("llc");
hello.sayHello();
