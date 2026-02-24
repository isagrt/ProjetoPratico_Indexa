import { Injectable } from '@angular/core';
import { ContatoInterface } from '../components/contato/contato-interface';

@Injectable({
  providedIn: 'root',
})

export class ContatoService {

  private contatos: ContatoInterface[] = [
     {
       "id": 1, "nome": "Ana", "telefone": "29 278869420",
       email: '',
       birth: '',
       redes: '',
       observacoes: ''
     },
    {
      "id": 53, "nome": "Antônio", "telefone": "38 128451235",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 2, "nome": "Ágata", "telefone": "38 128451235",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 3, "nome": "Bruno", "telefone": "95 695521583",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 4, "nome": "Beatriz", "telefone": "25 854986459",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 5, "nome": "Carlos", "telefone": "94 543197849",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 6, "nome": "Cláudia", "telefone": "31 176437098",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 7, "nome": "Daniel", "telefone": "56 613692441",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 8, "nome": "Diana", "telefone": "16 670764734",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 9, "nome": "Eduardo", "telefone": "71 962784210",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    },
    {
      "id": 10, "nome": "Eliana", "telefone": "94 601212586",
      email: '',
      birth: '',
      redes: '',
      observacoes: ''
    }
  ];

  constructor(){
    //tentativa de obter dados do localStorage

    const contatoLocalStorageString = localStorage.getItem('contatos');

    const contatosLocalStorage = contatoLocalStorageString ? JSON.parse(contatoLocalStorageString):null;

    //se existir no local storage e for um array, usa o arquivo. Senão mantem o padrão

    if (Array.isArray(contatosLocalStorage)){
      this.contatos = contatosLocalStorage;
    };

    // salvar os contatos no local storage

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(){
    return this.contatos;
  }

  salvarContatos(contato: ContatoInterface){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos))
  }

}
