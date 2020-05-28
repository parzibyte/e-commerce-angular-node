const conexion = require("./conexion")
module.exports = {
  insertar(nombre, descripcion, precio) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into productos
            (nombre, descripcion, precio)
            values
            (?, ?, ?)`,
        [nombre, descripcion, precio], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
  agregarFoto(idProducto, nombreFoto) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into fotos_productos
            (id_producto, foto)
            values
            (?, ?)`,
        [idProducto, nombreFoto], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, nombre, descripcion, precio from productos`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  obtenerConFotos() {
    return new Promise((resolve, reject) => {
      conexion.query(`select productos.*,fotos_productos.foto from productos inner join fotos_productos on productos.id = fotos_productos.id_producto group by productos.id`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  obtenerFotos(idProducto) {
    return new Promise((resolve, reject) => {
      conexion.query(`select id_producto, foto FROM fotos_productos WHERE id_producto = ?`,
        [idProducto],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, nombre,descripcion, precio from productos where id = ?`,
        [id],
        (err, resultados) => {
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
