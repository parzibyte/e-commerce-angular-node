import {Component, OnInit} from '@angular/core';
import {CarritoService} from "./carrito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node';
  public productos = [];

  constructor(private carritoService: CarritoService) {
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
    console.log("Productos:");
    console.log(this.productos)

  }

  public total() {
    // Quién te conoce reduce
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
  }


}
