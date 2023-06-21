//modulo nativo de node
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hola server Node.js");
});
//ponemos el server a la escucha, y recibe un callback
server.listen(3000, () => console.log(`http://localhost:3000`));
