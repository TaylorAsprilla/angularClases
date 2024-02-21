import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PersonaModel } from '../../core/models/Persona';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  personas: PersonaModel[] = [];
  usuarioExiste: boolean = false;

  users: { id: number; name: string }[] = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  ngOnInit(): void {
    this.personas.push(
      new PersonaModel(
        'Juan Pérez',
        30,
        'Masculino',
        'Calle Principal 123',
        'juan@example.com'
      ),
      new PersonaModel(
        'María González',
        25,
        'Femenino',
        'Avenida Central 456',
        'maria@example.com'
      ),
      new PersonaModel(
        'Carlos Rodríguez',
        40,
        'Masculino',
        'Plaza Mayor 789',
        'carlos@example.com'
      ),
      new PersonaModel(
        'Laura García',
        28,
        'Femenino',
        'Bulevar Secundario 101',
        'laura@example.com'
      ),
      new PersonaModel(
        'Roberto Martínez',
        35,
        'Masculino',
        'Callejón Pequeño 202',
        'roberto@example.com'
      ),
      new PersonaModel(
        'Ana López',
        22,
        'Femenino',
        'Rincón Escondido 303',
        'ana@example.com'
      ),
      new PersonaModel(
        'Miguel Sánchez',
        45,
        'Masculino',
        'Camino Grande 404',
        'miguel@example.com'
      ),
      new PersonaModel(
        'Isabel Ramírez',
        32,
        'Femenino',
        'Plaza Pequeña 505',
        'isabel@example.com'
      ),
      new PersonaModel(
        'David Fernández',
        27,
        'Masculino',
        'Avenida Larga 606',
        'david@example.com'
      ),
      new PersonaModel(
        'Elena Torres',
        38,
        'Femenino',
        'Ruta Serpenteante 707',
        'elena@example.com'
      )
    );
  }
}
