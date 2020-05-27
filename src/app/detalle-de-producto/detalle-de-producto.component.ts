import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../productos.service";
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../producto";

@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {
  public producto = {
    fotos: [],
    nombre: "",
    descripcion: "",
    precio: "",
  };
  public fotoSeleccionada: string;
  public indiceSeleccionado = 0;

  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute) {
  }

  public resolverFoto(foto) {
    return `http://localhost:3000/foto_producto/${foto}`;
  }

  public seleccionarImagen(indice) {
    this.indiceSeleccionado = indice;
    this.fotoSeleccionada = this.producto.fotos[this.indiceSeleccionado].foto;
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.producto = await this.productosService.obtenerProductoConFotosPorId(id);
    if (this.producto.fotos.length >= 0) {
      this.seleccionarImagen(0);
    }
  }

}
