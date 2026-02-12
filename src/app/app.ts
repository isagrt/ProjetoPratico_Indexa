import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formularios } from './components/pages/formularios/formularios';
import { ListaContatos } from './components/pages/lista-contatos/lista-contatos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Formularios,
    ListaContatos
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

