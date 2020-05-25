import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navegarAFormulario() {
    this.router.navigateByUrl("/productos/agregar");
  }

}
