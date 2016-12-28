var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 8080 });

var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var Client = kafka.Client;
var client = new Client('localhost:2181');
var topics = [
    {topic: 'count-topic', partition: 0}
];
var options = { autoCommit: true, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };
var consumer = new Consumer(client, topics, options);

wss.on('connection', function connection(ws) {

    console.log("connection established...")

    consumer.on('message', function (message) {
        console.log(message.value)
        ws.send(message.value);
    });

});

console.log("server listening on port 8080");
