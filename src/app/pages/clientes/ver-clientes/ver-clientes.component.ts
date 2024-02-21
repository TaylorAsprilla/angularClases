import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css',
})
export class VerClientesComponent implements OnInit {
  misClientes: Cliente[] = [];

  ngOnInit(): void {
    this.misClientes.push({
      id: 10,
      nombre: 'Pepito',
      direccion: 'Calle 13 # 4 -45',
      telefono: 311554564,
      email: 'correo@gmail.com',
      tipoDocumento: 'Cédula de Ciudadania',
      numeroDocumento: '10102456456',
      estado: true,
    });

    this.misClientes.push(
      {
        id: 2,
        nombre: 'Maria',
        direccion: 'Carrera 58 # 78 -45',
        telefono: 320564789,
        email: 'correo2@gmail.com',
        tipoDocumento: 'Pasaporte',
        numeroDocumento: 'Ar2545',
        estado: true,
      },
      {
        id: 3,
        nombre: 'Antonia',
        direccion: 'Carrera 54 # 7 - 30',
        telefono: 321545789,
        email: 'correo3@gmail.com',
        tipoDocumento: 'Cédula de Ciudadanía',
        numeroDocumento: '20314',
        estado: false,
      }
    );

    // Iteración de clientes
    this.misClientes.forEach((cliente) => {
      console.log(cliente);
    });
  }

  eliminarCliente(idCliente: number): void {
    this.misClientes = this.misClientes.filter(
      (cliente) => cliente.id !== idCliente
    );

    console.log('Eliminar', this.misClientes);
  }

  agregarCliente() {
    this.misClientes.push({
      id: 2,
      nombre: 'Maria',
      direccion: 'Carrera 58 # 78 -45',
      telefono: 320564789,
      email: 'correo2@gmail.com',
      tipoDocumento: 'Pasaporte',
      numeroDocumento: 'Ar2545',
      estado: true,
    });
  }
}
