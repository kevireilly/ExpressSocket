var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
  console.log('Received Socket.io connection:', socket.id);
});

server.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
