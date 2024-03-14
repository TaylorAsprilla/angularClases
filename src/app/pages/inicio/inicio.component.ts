import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PermisosDirective } from '../../core/directives/permisos/permisos.directive';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  imports: [RouterOutlet, PersonaComponent, RouterLink, PermisosDirective],
})
export class InicioComponent implements OnInit {
  nombre: string = '';

  //Me ejecuto cada vez carga el componente
  ngOnInit(): void {
    this.nombre = 'Maria Antonieta';
  }

  // Función Mostrar Modal
  mostrarModal(): void {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  }
}
