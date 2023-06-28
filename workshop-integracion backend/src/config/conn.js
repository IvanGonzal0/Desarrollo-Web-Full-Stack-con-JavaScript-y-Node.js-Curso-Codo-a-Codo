require("dotenv").config();

const mysql = require("mysql2");

//creamos un pool para realizar la 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    port:3306,
})


module.exports = {
    conn:pool.promise(),
}