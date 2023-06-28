const express = require("express");
//creamos un router de express
const router = express.Router();

router.post("/create", (req, res) => {
  console.log(req.body);
  res.send("Producto creado" + req.body.nombre);
});

router.put("/update", (req, res) => {
    console.log(req.body);
    res.send("Producto creado" + req.body.nombre);
  });

module.exports = router;
