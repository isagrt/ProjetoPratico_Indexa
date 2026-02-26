import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  styleUrls: ['./formularios.css'],
})
export class Formularios {
  contatoForm!: FormGroup;


  constructor(private contatoService: ContatoService,
    private router: Router,
    private activatedRoute: ActivatedRoute){
  }
  ngOnInit(){
    this.inicializarFormulario();
    this.carregarContato();
  }

  inicializarFormulario(){
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
      const novoContato = this.contatoForm.value;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      novoContato.id = id ? parseInt(id) : null

      this.contatoService.editarOuSalvarContato(novoContato).subscribe(() =>{
        this.contatoForm.reset();
        this.router.navigateByUrl('/lista-contatos');
      });
  }

  cancelar(){
    this.contatoForm.reset();
  }

  carregarContato(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) =>{
        this.contatoForm.patchValue(contato);
      });
    }
  }
}
