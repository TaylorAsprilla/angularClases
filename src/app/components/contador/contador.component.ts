import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
})
export class ContadorComponent {
  @Output() incrementarValor: EventEmitter<number> = new EventEmitter<number>();

  numero: number = 0;

  incremento() {
    console.log('Contador - Hijo', this.numero);
    this.numero++;

    // Emite el evento, emite el valor

    this.incrementarValor.emit(this.numero);
  }
}
