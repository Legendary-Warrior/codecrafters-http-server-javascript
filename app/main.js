//const net = require("net"); fldsjfldshflasfj dsafl
const http = require('http');
;
//const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('OK');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

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