import {Component, OnInit} from '@angular/core';
import {VentasService} from "../ventas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalle-de-venta',
  templateUrl: './detalle-de-venta.component.html',
  styleUrls: ['./detalle-de-venta.component.css']
})
export class DetalleDeVentaComponent implements OnInit {

  constructor(private ventasService: VentasService, private activatedRoute: ActivatedRoute) {
  }

  public venta = {
    total: 0,
    nombre: "",
    direccion: "",
    productos: [],
  };

  public columnas = ['nombre', 'precio'];

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.venta = await this.ventasService.obtenerDetalleDeVenta(id);
  }

}
