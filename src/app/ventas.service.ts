import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Producto} from "./producto";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpService) {
  }


  public async obtenerVentas() {
    return await this.http.get("/ventas");
  }
}
