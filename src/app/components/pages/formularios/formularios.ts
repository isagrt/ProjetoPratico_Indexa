import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';

@Component({
  selector: 'app-formularios',
  imports: [
    Container,
    Separador
  ],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {

}
