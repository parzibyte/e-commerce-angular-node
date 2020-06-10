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
import {Producto} from "./producto";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpService) {
  }


  public async obtenerVentas() {
    return await this.http.get("/ventas");
  }

  public async obtenerDetalleDeVenta(idVenta) {
    return await this.http.get("/detalle_venta?id=".concat(idVenta));
  }
}
