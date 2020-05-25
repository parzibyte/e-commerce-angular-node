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

  guardar() {
    console.log("El producto: ", this.productoModel)
    console.log("Fotos", this.foto.nativeElement);
    console.log("Fotos real", this.foto.nativeElement.files);
    const fd = new FormData();
    for (let x = 0; x < this.foto.nativeElement.files.length; x++) {
      fd.append("foto", this.foto.nativeElement.files[x])
    }

    const payload = {
      producto: this.productoModel,
      fotos: fd,
    }
    console.log(payload)
  }

  ngOnInit(): void {
  }

}
