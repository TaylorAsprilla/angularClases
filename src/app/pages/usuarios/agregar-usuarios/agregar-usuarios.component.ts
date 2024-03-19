import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { config } from '../../../../environments/configuration/config';
import { ROUTER_APP } from '../../../core/enum/router-app.enum';

@Component({
  selector: 'app-agregar-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-usuarios.component.html',
  styleUrl: './agregar-usuarios.component.css',
})
export class AgregarUsuariosComponent implements OnInit {
  usuarioForm: FormGroup;
  roles = config.roles;

  get ROUTER_APP() {
    return ROUTER_APP;
  }

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }

  crearUsuario() {
    if (this.usuarioForm.valid) {
      const usuarioData = this.usuarioForm.value;
      this.usuariosService.crearUsuarios(usuarioData).subscribe({
        next: (resp: any) => {
          Swal.fire(
            'Creado',
            `Se creó el usuario ${resp.usuario.nombre} satisfactoriamente`,
            'success'
          );

          this.usuarioForm.reset();
        },
        error: (error) => {
          Swal.fire('Error', `Error al crear el usuario, ${error}`, 'error');
        },
      });
    } else {
      Swal.fire(
        'Error',
        `El formulario es inválido. Por favor, revise los campos.`,
        'error'
      );
    }
  }
}
