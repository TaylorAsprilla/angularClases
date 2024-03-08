import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css',
})
export class VerClientesComponent implements OnInit {
  misClientes: Cliente[] = [];

  constructor(
    private clienteService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: any) => {
      console.log(data);
      this.misClientes = data.clientes;
    });
  }

  eliminarCliente(idCliente: number): void {
    this.misClientes = this.misClientes.filter(
      (cliente) => cliente._id !== idCliente
    );

    console.log('Eliminar', this.misClientes);
  }

  agregarCliente() {
    this.router.navigateByUrl('add-clientes');
  }
}
