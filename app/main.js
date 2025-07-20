const net = require("net");

console.log("hello!");

const server = net.createServer((socket) => {
  const response = "HTTP/1.1 200 OK\r\n\r\n";
  socket.write(response);

  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, "127.0.0.1");
