import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../../service/contato-service';

@Component({
  selector: 'app-formularios',
  standalone: true,
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
  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router){

  }
  ngOnInit(){
    this.inicializarFormulario();
  }

  inicializarFormulario(){
     this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birth: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }


  salvarContato(){
      const novoContato = this.contatoForm.value;
      this.contatoService.salvarContatos(novoContato);

      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
  }

  cancelar(){
    this.contatoForm.reset();
  }
}
