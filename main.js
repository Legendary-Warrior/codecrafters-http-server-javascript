const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    // Respond with a 200 OK HTTP response
    const response = "HTTP/1.1 200 OK\r\n\r\n";
    socket.write(response);
    socket.end();
  });

  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, "localhost");
