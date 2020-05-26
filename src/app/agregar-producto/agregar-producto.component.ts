import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Producto} from "../producto";
import {ProductosService} from "../productos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  productoModel = new Producto("", "",);
  @ViewChild("foto", {
    read: ElementRef
  }) foto: ElementRef;

  constructor(private productosService: ProductosService, private snackBar: MatSnackBar) {
  }

  public cargando = false;

  async guardar() {
    this.cargando = true;
    // Guardamos producto
    const idProductoGuardado = await this.productosService.agregarProducto(this.productoModel);
    // Y luego las fotos
    let archivos = this.foto.nativeElement.files;
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }
    fd.append("idProducto", idProductoGuardado);
    const respuesta = await this.productosService.agregarFotosDeProducto(fd);
    console.log({respuesta})
    this.snackBar.open("Producto guardado", "acción", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    })
    this.cargando = false;
    this.productoModel = new Producto("", "");
    this.foto.nativeElement.value = "";
  }

  ngOnInit(): void {


  }

}
