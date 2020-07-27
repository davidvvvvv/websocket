const WebSocket = require('ws');
const url = require('url');
 
const wss = new WebSocket.Server({
  port: 8080
});

wss.on('connection', function connection(ws,req) {
  console.log('server connection')
  const parameters = url.parse(req.url, true);
  console.log(parameters.query.abc);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  ws.send('something');
});