var server = require("./Server.js");
var router = require("./Router.js");

server.start(router.route);
