//modulo nativo de node
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8",
  });
  res.end("<h1>Hola server Node.js</h1><p>Parrafo</p>");
});
//ponemos el server a la escucha, y recibe un callback
server.listen(3000, () => console.log(`http://localhost:3000`));
