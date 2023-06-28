require("dotenv").config();
//creamos un servidor basico

const express = require("express");
const app = express();
app.use(express.urlencoded({ urlencoded: false }));
app.use("/users", require("./src/routes/userRouter"));
//p'ara creacion de vista
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("index", { msg: "Hola ejs..." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
