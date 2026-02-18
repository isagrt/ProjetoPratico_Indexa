import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formularios } from './components/pages/formularios/formularios';
import { ListaContato } from './components/pages/lista-contato/lista-contato';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Formularios,
    ListaContato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

