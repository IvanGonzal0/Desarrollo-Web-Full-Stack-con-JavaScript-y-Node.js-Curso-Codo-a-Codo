const methodOverride = require("method-override")
const express = require("express");
const app = express();
//middleware para usar los archivos y rutas que estan en la carpeta publica
app.use(express.static("public"));
app.use(methodOverride("_method"));
//otros Middlewares, para poder leer la info que viene encodeada y otro para jsons
app.use(express.urlencoded());
app.use(express.json);



//importamos el mainroutes
const mainRouter = require("./src/mainRoutes");

//usamos el mainrouter
app.use("/", mainRouter);

//importamos el productosrouter
const productosRouter = require("./src/productosRouter");
app.use("/productos", productosRouter);

//importamos el productosAPIRouter, para recibir un json
const productosAPIRouter = require("./src/api/productosAPIRouter");
app.use("/api/productos", productosAPIRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
