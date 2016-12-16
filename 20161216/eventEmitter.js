
//引入 events 模块
var events = require("events");
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHander = function connect () {
	console.log("is connected!!!");
	//触发data_received事件
	eventEmitter.emit("data_received");
}
//绑定connection事件处理程序
eventEmitter.on('connection', connectHander);
//使用匿名绑定data_received事件
eventEmitter.on('data_received', function () {
	console.log("data received is succeed");
})
//触发connection事件
eventEmitter.emit('connection');

console.log("procedure is end");