
//���� events ģ��
var events = require("events");
//����eventEmitter����
var eventEmitter = new events.EventEmitter();
//�����¼��������
var connectHander = function connect () {
	console.log("is connected!!!");
	//����data_received�¼�
	eventEmitter.emit("data_received");
}
//��connection�¼��������
eventEmitter.on('connection', connectHander);
//ʹ��������data_received�¼�
eventEmitter.on('data_received', function () {
	console.log("data received is succeed");
})
//����connection�¼�
eventEmitter.emit('connection');

console.log("procedure is end");