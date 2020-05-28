const conexion = require("./conexion")
module.exports = {
  obtenerProductosVendidos(idVenta) {
    return new Promise((resolve, reject) => {
      conexion.query(`select productos.* from productos_vendidos inner join productos on productos.id = productos_vendidos.id_producto where productos_vendidos.id_venta = ?;`,
        [idVenta],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`select ventas.total, clientes.nombre, clientes.direccion FROM ventas inner join clientes on ventas.id_cliente = clientes.id WHERE ventas.id = ?`,
        [id],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados[0]);
        });
    });
  },
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select ventas.id, ventas.total, clientes.nombre, clientes.direccion FROM ventas inner join clientes on ventas.id_cliente = clientes.id;`,
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
