import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {
  @Input() producto: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public resolverRuta() {
    const baseUrl = environment.baseUrl;
    return `${baseUrl}/foto_producto/${this.producto.foto}`;
  }

  public detalles() {
    this.router.navigate(["/producto/detalle", this.producto.id])
  }

}
