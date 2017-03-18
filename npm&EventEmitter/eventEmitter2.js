
//引用events模块
var events = require('events');
//创建EventEmitter对象
var eventEmitter = new events.EventEmitter();

//create listener1
var listener1 = function listener1() {
	console.log('monitor listener1 execute.');
}

//create listener2
var listener2 = function listener2() {
	console.log('monitor listener2 execute.');
}
//eventEmitter add listener1
eventEmitter.addListener('connection', listener1);
//eventEmitter add listener2
eventEmitter.on('connection', listener2);
//get listenerCount
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "events");
//emit connection event
eventEmitter.emit('connection');
//remove listener1
eventEmitter.removeListener('connection', listener1);
console.log('listener1 is removed');
//emit connection event
eventEmitter.emit('connection');
//get listenerCount
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + 'events');

console.log('precedure is end');