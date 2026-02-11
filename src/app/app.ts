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

  /*Filtrar os contatos por letra no app.ts
  filtrarContatosPorLetraInicial(letra:string): IContato[]{
    return this.filtraContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }
*/
  filtraContatosPorTexto(): IContato[]{
    if (!this.filtroPorTexto){
      return this.contatos
    }

    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLocaleLowerCase())
    })
  }

  removerAcentos(texto: string): string {
    return texto
      .normalize('NFD') /* Separa a letra do acento = â = a + ^ */
      .replace(/[\u0300-\u036f]/g, /* o intervalo significa que qualquer caractere ente u0300 e u036f (ONDE SÃO LOCALIZADOS OS ACENTOS) vai ser separado  */ ''); /* remove os acentos que ficaram separados, e o /g significa global e remove todos */
  }
  filtrarPorTextoEPorLetra(letra: string): IContato[] {
  const filtro = this.removerAcentos(this.filtroPorTexto).toLowerCase(); /* Definido filtro como remover acentos */

  return this.contatos.filter(contato => { /* analiza cada contato da lista */
    const nome = this.removerAcentos(contato.nome).toLowerCase(); /* Remove os acentos de cada nome */

    const passaTexto = !filtro || nome.includes(filtro); /* verifica se começa com a letra escolhida */
    const passaLetra = nome.startsWith(letra);

    return passaTexto && passaLetra;
  });
}
}

