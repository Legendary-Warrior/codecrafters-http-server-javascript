//const net = require("net"); fldsjfldshflasfj dsafl
//const http = require('http');
;
const net = require('net');

const server = net.createServer((socket) => {
  // Write the raw HTTP response as required
  socket.write('HTTP/1.1 200 OK\r\n\r\n\r\n');
  socket.end();
});

server.listen(4221, 'localhost');


// You can use print statements as follows for debugging, they'll be visible when running tests.
// console.log("Logs from your program will appear here!");

// const server = net.createServer((socket) => {
//   socket.on("close", () => {
//     socket.end();
//   });
// });

// server.listen(4221, "localhost");

// const server = http.createServer(req,res)=>{
//   res.statusCode= 200;
  
// }