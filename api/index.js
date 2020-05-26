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

if (!fs.existsSync(DIRECTORIO_FOTOS)) {
  fs.mkdirSync(DIRECTORIO_FOTOS);
}


app.get('/', async (peticion, respuesta) => {
  // Podemos acceder a la petición HTTP
  let agenteDeUsuario = peticion.header("user-agent");
  const productos = await productoModel.obtener()
  respuesta.json(productos)
});
app.post('/producto', (peticion, respuesta) => {
  const form = formidable({
    multiples: true,
    uploadDir: DIRECTORIO_FOTOS,
  })
  form.parse(peticion);
  form.on("fileBegin", (name, file) => {
    const extension = path.extname(file.name);
    const nuevoNombre = uuidv4().concat(extension);
    file.path = path.join(DIRECTORIO_FOTOS, nuevoNombre);
  })
  // form.on("file", (name, file) => {
  // })
  respuesta.json({
    respuesta: true,
  })
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
