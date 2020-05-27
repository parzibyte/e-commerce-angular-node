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
  public columnas = ['nombre', 'descripcion', 'precio'];

  constructor(private router: Router, private productosService: ProductosService) {
  }

  async ngOnInit() {
    this.productos = await this.productosService.obtenerProductos();
  }

  navegarAFormulario() {
    this.router.navigateByUrl("/productos/agregar");
  }

}
