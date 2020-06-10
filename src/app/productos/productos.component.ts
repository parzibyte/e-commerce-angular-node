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
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductosService} from "../productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos = [];
  public columnas = ['nombre', 'descripcion', 'precio', 'eliminar'];

  constructor(private router: Router, private productosService: ProductosService) {
  }

  async eliminar(producto) {
    if (!confirm("¿Realmente lo quieres eliminar<?")) {
      return;
    }
    await this.productosService.eliminarProducto(producto.id);
    await this.obtenerProductos();
  }

  async ngOnInit() {
    await this.obtenerProductos();
  }

  async obtenerProductos() {
    this.productos = await this.productosService.obtenerProductos();
  }

  navegarAFormulario() {
    this.router.navigateByUrl("/productos/agregar");
  }

}
