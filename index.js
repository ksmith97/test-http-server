const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request ${req.method} ${req.url}`)
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
console.log("Server listening on 8000")
