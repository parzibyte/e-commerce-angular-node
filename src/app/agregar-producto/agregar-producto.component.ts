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
    if (!this.productoModel.nombre) {
      return alert("Escribe un nombre");
    }
    if (!this.productoModel.descripcion) {
      return alert("Escribe la descripción");
    }
    if (!this.productoModel.precio) {
      return alert("Escribe el precio");
    }
    let archivos = this.foto.nativeElement.files;
    if (!archivos.length) {
      return alert("Selecciona al menos una foto");
    }
    this.cargando = true;
    // Guardamos producto
    const idProductoGuardado = await this.productosService.agregarProducto(this.productoModel);
    // Y luego las fotos
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }
    fd.append("idProducto", idProductoGuardado);
    const respuesta = await this.productosService.agregarFotosDeProducto(fd);
    this.snackBar.open("Producto guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.cargando = false;
    this.productoModel = new Producto("", "");
    this.foto.nativeElement.value = "";
  }

  ngOnInit(): void {


  }

}
