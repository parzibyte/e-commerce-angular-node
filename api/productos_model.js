const conexion = require("./conexion")
module.exports = {
  insertar(nombre, precio) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into productos
            (nombre, precio)
            values
            (?, ?)`,
        [nombre, precio], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, codigo_barras from productos`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, nombre, precio from productos where id = ?`,
        [id],
        (err, resultados) => {
          console.log({resultados});
          if (err) reject(err);
          else resolve(resultados[0]);
        });
    });
  },
  actualizar(id, nombre, precio) {
    return new Promise((resolve, reject) => {
      conexion.query(`update productos
            set nombre = ?,
            precio = ?
            where id = ?`,
        [nombre, precio, id],
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
  },
  eliminar(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`delete from productos
            where id = ?`,
        [id],
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
  },
}
