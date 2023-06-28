require("dotenv").config();
//creamos un servidor basico

const express = require("express");
const app = express();
app.use(express.urlencoded({ urlencoded: false }));
app.use("/users", require("./src/routes/userRouter"));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
