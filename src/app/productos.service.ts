/*

    Programado por Luis Cabrera Benito 
  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
    
    Blog:       https://parzibyte.me/blog
    Ayuda:      https://parzibyte.me/blog/contrataciones-ayuda/
    Contacto:   https://parzibyte.me/blog/contacto/
*/
import {Injectable} from '@angular/core';
import {Producto} from "./producto";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpService) {
  }

  public async eliminarProducto(idProducto) {
    return await this.http.delete("/producto?id=".concat(idProducto));
  }

  public async agregarProducto(producto: Producto) {
    return await this.http.post("/producto", producto);
  }

  /*
  El formdata debe tener el id del producto
   */
  public async agregarFotosDeProducto(fotos: FormData) {
    return await this.http.formdata("/fotos_producto", fotos);
  }

  public async obtenerProductos() {
    return await this.http.get("/productos");
  }

  public async obtenerProductosConFotos() {
    return await this.http.get("/productos_con_fotos");
  }

  public async obtenerProductoConFotosPorId(idProducto) {
    return await this.http.get("/producto?id=".concat(idProducto));
  }
}
