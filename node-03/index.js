const express = require("express");
const app = express();

//CAPA MIDLEWARE
app.use(express.static("public"));

//CAPA RUTA "http://localhost:3000/"
app.get("/", (req, res) => {
  res.send("Hola Express start");
});

//ruta nosotros.html, devolviendo el file nosotros.html
app.get("/nosotros.html", (req, res) => {
  res.sendFile(__dirname + "/nosotros.html");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
