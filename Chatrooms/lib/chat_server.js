var socketio = require('socket.io');
var io;
var guestNumbser = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};
var _rooms = [];


function assignGuestName(socket, guestNumbser, nickNames, namesUsed) {
	var name = 'Guest' + guestNumbser;
	nickNames[socket.id] = name;
	socket.emit("nameResult", {
		success: true,
		name: name
	});

	namesUsed.push(name);
	return guestNumbser + 1;
}

function joinRoom(socket, room) {
	if (!~_rooms.indexOf(room)) _rooms.push(room);
	socket.join(room);
	currentRoom[socket.id] = room;
	socket.emit('joinResult', {room: room});
	socket.to(room).emit('message', {
		text: nickNames[socket.id] + 'has joined' + room + '.'
	});

	var usersInRoom = null;
	io.sockets.in(room).clients(function(error, clients){
 		if (error) throw error;

  		var usersInRoomSummary = "Users currently in " + room + ":";
  		clients.forEach(function(value, index){
  			if (value != socket.id) {
  				if (index > 0){
  					usersInRoomSummary += ",";
  				}
				usersInRoomSummary += nickNames[value];
			}
  		});
  		usersInRoomSummary += ".";
		socket.emit('message', {text: usersInRoomSummary});
	});
}

function handleNameChangeAttempts(socket, nickNames, namesUsed) {
	socket.on('nameAttempt', function(name) {
		if (name.indexOf('Guest') === 0) {
			socket.emit('nameResult', {
				success: false,
				message: 'Names cannot begin with "Guest."'
			});
		} else {
			if (namesUsed.indexOf(name) === -1) {
				var previousName = nickNames[socket.id];
				var previousNameIndex = namesUsed.indexOf(previousName);
				namesUsed.push(name);
				nickNames[socket.id] = name;
				delete namesUsed[previousName];
			} else {
				socket.emit('nameResult', {
					success: false,
					messgae: 'That name is already in use.'
				});
			}
		}
	})
}

function handleMessageBroadcasting(socket) {
	socket.on('message', function(message) {
		socket.broadcast.to(message.room).emit('message', {
			text: nickNames[socket.id] + ":" + message.text
		});
	});
}

function handleRoomJoining(socket) {
	socket.on('join', function(room) {
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket, room.newRoom);
	})
}

function handleClientDisconnection(socket) {
	socket.on('disconnect', function() {
		var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
		delete namesUsed[nameIndex];
		delete nickNames[socket.id];
	});
}

exports.listen = function(server) {
	io = socketio(server);
	io.set('log level', 1);

	io.sockets.on('connection', function (socket) {

		guestNumbser = assignGuestName(socket, guestNumbser, nickNames, namesUsed);
		joinRoom(socket, "Lobby");

		handleMessageBroadcasting(socket, nickNames);
		handleNameChangeAttempts(socket, nickNames, namesUsed);
		handleRoomJoining(socket);

		socket.on("rooms", function() {
			socket.emit("rooms", _rooms);
		});

		handleClientDisconnection(socket, nickNames, namesUsed);
	})
}
