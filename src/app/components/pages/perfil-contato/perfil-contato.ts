import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import agenda from '../../../agenda.json';
import { ContatoService } from '../../../service/contato-service';
import { ContatoInterface } from '../../contato/contato-interface';



@Component({
  selector: 'app-perfil-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css',
})


export class PerfilContato implements OnInit{

  contato: ContatoInterface = {
  id:0,
  nome: '',
  telefone: '',
  email: '',
  dataNascimento: '',
  redesSociais: '',
  observacoes: ''
}

  modoEdicao = false;

  constructor(private activatedRoute: ActivatedRoute, private contatoService: ContatoService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ;
    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato
        this.cdr.detectChanges();
      })
    }

  }



/*
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
*/
}

