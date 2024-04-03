import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Subscription } from 'rxjs';
import { UsuarioModel } from '../../../core/models/usuario.model';
import Swal from 'sweetalert2';
import { AutenticacionService } from '../../../services/autenticacion/autenticacion.service';
import { config } from '../../../../environments/configuration/config';
import { FormsModule } from '@angular/forms';
import { ROUTER_APP } from '../../../core/enum/router-app.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css',
})
export class VerUsuariosComponent implements OnInit, OnDestroy {
  usuarioSubscription: Subscription;
  usuarios: UsuarioModel[] = [];
  usuarioLogin: UsuarioModel;
  roles = config.roles;

  constructor(
    private usuarioService: UsuariosService,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioLogin = this.autenticacionService.usuario;
    this.cargarUsuarios();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService
      .getUsuarios()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
      });
  }

  eliminarUsuario(id: string) {
    if (id === this.usuarioLogin._id) {
      Swal.fire('Error!', 'No puede eliminar este usuario', 'error');
    } else {
      this.usuarioService.eliminarUnUsuario(id).subscribe((resp: any) => {
        this.cargarUsuarios();
        Swal.fire(
          'Eliminado',
          `Se eliminó el usuario ${resp.usuario.nombre}`,
          'success'
        );
      });
    }
  }

  actualizarRol(usuario: UsuarioModel) {
    this.usuarioService.actualizarUnUsuario(usuario).subscribe((resp: any) => {
      Swal.fire(
        'Actualizado',
        `Se actualizó el usuario ${resp.usuario.nombre}`,
        'success'
      );
    });
  }

  agregarUsuarios() {
    this.router.navigateByUrl(`${ROUTER_APP.AGREGAR_USUARIOS}/nuevo`);
  }

  editarUsuarios(id: string) {
    this.router.navigateByUrl(`${ROUTER_APP.AGREGAR_USUARIOS}/${id}`);
  }
}
