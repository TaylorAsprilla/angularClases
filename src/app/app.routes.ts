import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VerClientesComponent } from './pages/clientes/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clientes/agregar-clientes/agregar-clientes.component';
import { AutenticacionComponent } from './auth/autenticacion/autenticacion.component';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Autenticación',
    children: [{ path: 'login', component: AutenticacionComponent }],
  },
  {
    path: 'inicio',
    title: 'Inicio',
    canActivate: [authGuard],
    children: [
      // Path por defecto del path padre
      { path: '', title: 'Inicio', component: InicioComponent },
      { path: 'servicio', title: 'Servicios', component: ServiciosComponent },
      {
        path: 'acercade',
        title: 'Quienes Somos',
        component: AcercaDeComponent,
      },
      {
        path: 'contacto',
        title: 'Contáctenos',
        component: ContactoComponent,
      },
      {
        path: 'clientes',
        title: 'Clientes Potenciales',
        component: VerClientesComponent,
      },
      {
        path: 'add-clientes',
        title: 'Agregar Clientes',
        component: AgregarClientesComponent,
      },
    ],
  },
  // Si no encuentra la ruta, redirecciona al login
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];
