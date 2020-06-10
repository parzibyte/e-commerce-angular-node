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
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpService) {
  }

  public async quitarProducto(idProducto: number) {
    return await this.http.post("/carrito/eliminar", {
      id: idProducto,
    });
  }

  public async agregarAlCarrito(idProducto: number) {
    return await this.http.post("/carrito/agregar", {
      id: idProducto,
    });
  }

  public async existeEnCarrito(idProducto: number) {
    return await this.http.post("/carrito/existe", {
      id: idProducto,
    });
  }

  async obtenerProductos() {
    return await this.http.get("/carrito");
  }

  async terminarCompra(datosCliente) {
    return await this.http.post("/compra", datosCliente);
  }
}
