// const { conn } = require("../config/conn");

// const getProductos = async () => {
//   try {
//     //voy a traer las rows de la query
//     const [rows] = await conn.query("SELECT * FROM productos");
//     return rows;
//   } catch (error) {
//     throw error;
//   } finally {
//     conn.releaseConnection();
//   }
// };

// const getProducto = async (id) => {
//   try {
//     //voy a traer las rows de la query
//     const [rows] = await conn.query("SELECT * FROM productos WHERE id = ?", [
//       id,
//     ]);
//     return rows;
//   } catch (error) {
//     throw error;
//   } finally {
//     conn.releaseConnection();
//   }
// };

// //exporto, publico los metodos que voy a necesitar
// module.exports = {
//   getProductos,
//   getProducto,
// };
const { conn } = require("../config/conn");

const getProductos = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM productos");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const getProducto = async (id) => {
  try {
    const [rows] = await conn.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  getProductos,
  getProducto,
};
