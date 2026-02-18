import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import agenda from '../../../agenda.json';

interface IContato {
  id:number
  nome: string
  telefone: string
  email: string,
  dataNascimento: string,
  redesSociais:{
    linkedin: string,
    instagram: string
  }
}

@Component({
  selector: 'app-perfil-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css',
})


export class PerfilContato {

 contato!: IContato;
  contatoBackup!: IContato;

  modoEdicao = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contato = agenda.find(c => c.id === id)!;
  }

  editarContato() {
    this.contatoBackup = JSON.parse(JSON.stringify(this.contato));
    this.modoEdicao = true;
  }

  salvarContato() {
    this.modoEdicao = false;
    console.log('Contato atualizado:', this.contato);
  }

  cancelarEdicao() {
    this.contato = JSON.parse(JSON.stringify(this.contatoBackup));
    this.modoEdicao = false;
  }
  excluirContato(){
    console.log('Contato excluído',this.contato)
  }

}

