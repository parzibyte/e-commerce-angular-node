const express = require("express"),
  path = require("path"),
  app = express(),
  productoModel = require("./productos_model"),
  formidable = require("formidable"),
  cors = require("cors"),
  fs = require("fs");
const {v4: uuidv4} = require("uuid")


const DIRECTORIO_PERMITIDO_CORS = "http://localhost:4200",
  DIRECTORIO_FOTOS = path.join(__dirname, "fotos_productos"),
  PUERTO = 3000;

app.use(cors({
  origin: DIRECTORIO_PERMITIDO_CORS
}));
app.use(express.json())
// Fotos
app.use("/foto_producto", express.static(DIRECTORIO_FOTOS));

if (!fs.existsSync(DIRECTORIO_FOTOS)) {
  fs.mkdirSync(DIRECTORIO_FOTOS);
}


app.post('/fotos_producto', (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: DIRECTORIO_FOTOS,
  });

  form.parse(req, async (err, fields, files) => {
    const idProducto = fields.idProducto;
    console.log({idProducto})
    for (let clave in files) {
      const file = files[clave];
      const nombreArchivo = file.name;
      await productoModel.agregarFoto(idProducto, nombreArchivo)
    }
  });

  form.on("fileBegin", (name, file) => {
    const extension = path.extname(file.name);
    const nuevoNombre = uuidv4().concat(extension);
    file.path = path.join(DIRECTORIO_FOTOS, nuevoNombre);
    file.name = nuevoNombre;
  })

  form.on("end", () => {
    res.json({
      respuesta: true,
    })
  })

});

app.post('/producto', async (req, res) => {
  const producto = req.body;
  const respuesta = await productoModel.insertar(producto.nombre, producto.descripcion, producto.precio);
  res.json(respuesta);
});

app.get('/productos', async (req, res) => {
  const productos = await productoModel.obtener();
  res.json(productos);
});
app.get('/productos_con_fotos', async (req, res) => {
  const productos = await productoModel.obtenerConFotos();
  res.json(productos);
});


// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(PUERTO, err => {
  if (err) {
    // Aquí manejar el error
    console.error("Error escuchando: ", err);
    return;
  }
  // Si no se detuvo arriba con el return, entonces todo va bien ;)
  console.log(`Escuchando en el puerto :${PUERTO}`);
});
