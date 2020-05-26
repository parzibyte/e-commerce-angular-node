import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //TODO: put it in a constant
  rutaServidor = "http://localhost:3000"

  constructor() {
  }

  public async post(ruta: string, payload: any) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
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
}
