//con esta linea configuramos lo que hay en el archivo .env
// require('dotenv').config();
// //cualuquiera que use este modulo se conecta a la base de dates
// const mysql = require("mysql2");

//CONEXION MULTIPLE

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// module.exports = {
//   conn: pool.promise(),
// };
//CONEXION INDIVIDUAL
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "cac_23075"
// })

// connection.connect();

// module.exports = connection;

require("dotenv").config();
const mysql = require("mysql2");

// Conexion individual
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "cac_23075",
// });

// connection.connect();

// module.exports = connection;

// Conexion multiple
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  conn: pool.promise(),
};
