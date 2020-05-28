const conexion = require("./conexion")
module.exports = {
  insertar(nombre, direccion) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into clientes
            (nombre,direccion)
            values
            (?, ?)`,
        [nombre, direccion], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
}
