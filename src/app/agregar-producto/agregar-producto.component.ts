import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Producto} from "../producto";

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

  constructor() {
  }

  async guardar() {
    console.log("El producto: ", this.productoModel)
    console.log("Fotos", this.foto.nativeElement);
    let archivos = this.foto.nativeElement.files;
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }

    const payload = {
      producto: this.productoModel,
      fotos: fd,
    }

    console.log(payload)
    const respuestaRaw = await fetch("http://localhost:3000/producto", {
      method: "POST",
      body: fd,
    })
    const respuesta = await respuestaRaw.text()
    console.log(respuesta)
  }

  ngOnInit(): void {
  }

}
