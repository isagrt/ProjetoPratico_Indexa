import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Cabecalho } from './components/cabecalho/cabecalho';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indexa');
}
