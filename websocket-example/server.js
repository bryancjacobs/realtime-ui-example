var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

    var message = {
        "message":"something"
    };
  ws.send(message);
});

console.log("server listening on port 8080");
