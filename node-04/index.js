const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const personajes = JSON.parse(
  fs.readFileSync(__dirname + "/data/personajes.json")
);

app.get("/", (req, res) => {
  res.send("Hola Express");
});

//GET para listado de personajes
// app.get("/personajes", (req, res) => {
//   //voy al directorio donde tengo el json(2 formas)
//   //console.log(__dirname + "/data/personajes.json");
//   //console.log(path.join(__dirname + "/data/personajes.json"));

//   //const personajes = fs.readFileSync(__dirname + "/data/personajes.json");
//   console.log(req.query.status);
//   res.send(personajes);
// });

//PROFESOR
app.get("/personajes", (req, res) => {
    //   console.log(__dirname + "/data/personajes.json");
    //   console.log(path.join(__dirname, "/data/personajes.json"));
  
    //   const personajes = fs.readFileSync(__dirname + "/data/personajes.json")
    //   res.send(JSON.parse(personajes));
    console.log(req.query.status);
  
    if (req.query.status) {
      const filtrados = personajes.filter(
        (personaje) =>
          personaje.status == req.query.status
      );
  
      res.send(filtrados);
    } else {
      res.send(personajes);
    }
  });

//GET PARA TRAER PERSONAJE CON QUERY(CONDICION)
// app.get("/personajes", (req, res) => {
//   //voy al directorio donde tengo el json(2 formas)
//   //console.log(__dirname + "/data/personajes.json");
//   //console.log(path.join(__dirname + "/data/personajes.json"));

//   //const personajes = fs.readFileSync(__dirname + "/data/personajes.json");
//   console.log(req.query.status);
//   if (req.query.status) {
//     const filtrados = personajes.filter(
//       (personaje) =>
//         personaje.status.toLowerCase() == req.query.status.toLocaleLowerCase()
//     );
//     res.send(filtrados);
//   }
//   res.send(personajes);
// });

//GET PARA TRAER 1 personaje

app.get("/personajes/:id", (req, res) => {
  //esta linea me da los params requeridos, pueden ser varios y me devuelve la clave valor de cada parametro
  //console.log(req.params);
  //voy a buscar el parametro id
  //console.log(req.params.id);
  // const buffer = fs.readFileSync(__dirname + "/data/personajes.json");

  // const personajes = JSON.parse(buffer);

  //voy a buscar el personaje  id

  //FALTA ESTA PARTE
  const personaje = personajes.find(
    (personaje) => personaje.id == req.params.id
  );
  res.send(personaje);
});

//POST
app.post("/personajes", (req, res) => {
  res.send("Crear un personaje");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
