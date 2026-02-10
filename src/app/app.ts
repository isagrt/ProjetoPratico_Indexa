import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Separador } from './components/separador/separador';
import { Contato } from './components/contato/contato';

interface IContato{
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Container,
    Cabecalho,
    Separador,
    Contato,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*protected readonly title = signal('indexa');*/
  alfabeto: string ='abcdefghijklmnopqrstuvwxyz';

  contatos: IContato[] = agenda;
  filtroPorTexto: string = '';

  /*Filtrar os contatos por letra no app.ts*/
  filtrarContatosPorLetraInicial(letra:string): IContato[]{
    return this.filtraContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }

  filtraContatosPorTexto(): IContato[]{
    if (!this.filtroPorTexto){
      return this.contatos
    }
    
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLocaleLowerCase())
    })
  }
}
