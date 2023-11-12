import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO-APP';
  welcome = 'welcome in the end of world';
  tasks =
    [
      'Instalar el Angular CLI',
      'Crear proyecto',
      'Crear componentes',
      'crear servicio',
      'Build para produccion',
    ];
}
