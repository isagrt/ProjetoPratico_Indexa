import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Separador } from './components/separador/separador';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Container,
    Cabecalho,
    Separador
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indexa');
}
