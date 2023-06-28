const express = require("express");
//creamos un router de express
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola Express usando el router");
});

router.get("/contacto", (req, res) => {
  res.send("Pagina de contacto");
});

module.exports = router;
