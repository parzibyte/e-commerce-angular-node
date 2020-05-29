import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rutaServidor = environment.baseUrl;

  constructor() {
  }

  public async post(ruta: string, payload: any) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    });
    return await respuestaRaw.json();
  }

  public async formdata(ruta: string, payload: FormData) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      body: payload,
      method: "POST",
    });
    return await respuestaRaw.json();
  }

  async get(ruta: string) {
    // Por defecto se hace una petición GET
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      credentials: "include",
    });
    return await respuestaRaw.json();
  }

  async delete(ruta: string) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      credentials: "include",
      method: "DELETE",
    });
    return await respuestaRaw.json();
  }
}
