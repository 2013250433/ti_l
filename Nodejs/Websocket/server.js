var WebSocketServer = require('ws').Server;
 wss = new WebSocketServer({port:3000});

wss.on("connection", function(ws){
	ws.send("Hello, Im server. ");
	ws.on("message",function(message){
		console.log("Received: %s",message);
	})
});