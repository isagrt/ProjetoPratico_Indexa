import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formularios',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {
  contatoForm: FormGroup;

  /* Metodo construtor */
  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }


  salvarContato(){
    console.log(this.contatoForm.value)

  }

  cancelar(){
    console.log('Submissão cancelada!');
  }
}
