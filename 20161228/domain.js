
var EventEmitter = require('events').EventEmitter;
var domain = require('domain');

var emitter1 = new EventEmitter();

//create domain
var domain1 = domain.create();

domain1.on('error', function(err) {
	console.log('domian1 deal with the error ' + err.message);
});

//According to the binding
domain1.add(emitter1);

emitter1.on('error', function(err){
	console.log('monitor deal with the error ' + err.message);
});

emitter1.emit('error', new Error('By the monitor'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('By the domain'));

var domain2 = domain.create();

domain2.on('error', function(err) {
	console.log('domain2 deal with the error ' + err.message);
});

//Implicit binding
domain2.run(function() {
	var emitter2 = new EventEmitter();
	emitter2.emit('error', new Error('By the domain2'));
});


domain1.remove(emitter1);
emitter1.emit('error', new Error('Convert exceptions'));
