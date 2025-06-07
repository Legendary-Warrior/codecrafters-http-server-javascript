const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const response = "HTTP/1.1 200 OK\r\n\r\n\r\n";
    socket.write(response);
    socket.end();
  });
});
socket.on("close", () => {
  socket,end();
});

server.listen(4221, "localhost");
