import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import agenda from '../../../agenda.json';

interface IContato {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-perfil-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css',
})


export class PerfilContato {

  mostrarSenha = false;

   contato!: IContato;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.contato = agenda.find(c => c.id === id)!;
  }
}
