import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.css'],
  /*
  Aquí iría el modo de uso de DOM shadow pero ningunó sirvió, ya que
  no se tomaba el color del botón. Por eso es que el contenido del botón se maneja como texto y
  no como slot
   */

})
export class LoadingButtonComponent implements OnInit {
  @Input() cargando: boolean
  @Input() texto: string

  constructor() {
  }

  ngOnInit(): void {
  }

}
