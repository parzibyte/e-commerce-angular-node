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
