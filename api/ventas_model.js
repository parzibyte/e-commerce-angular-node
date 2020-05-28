const conexion = require("./conexion")
module.exports = {
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select ventas.total, clientes.nombre, clientes.direccion FROM ventas inner join clientes on ventas.id_cliente = clientes.id;`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  insertar(idCliente, total) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into ventas
            (id_cliente, total)
            values
            (?, ?)`,
        [idCliente, total], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
}
