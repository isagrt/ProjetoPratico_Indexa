import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-formularios',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule
  ],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {
  contatoForm: FormGroup;

  /* Metodo construtor */
  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('Isadora'),
      telefone: new FormControl('99 9999-9999'),
      email: new FormControl('fulano@gmail.com'),
      aniversario: new FormControl('04/10/2005'),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

}
