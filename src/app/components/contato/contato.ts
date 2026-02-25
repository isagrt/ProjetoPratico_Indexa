import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contato',
  imports: [RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  @Input() id?: number;
  @Input() nome: string = "";
  @Input() telefone: string ="";
  @Input() email: string ="";
}
