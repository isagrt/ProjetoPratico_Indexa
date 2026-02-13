import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [
    Container,
    Separador,
    RouterLink,
    ReactiveFormsModule,

    ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

loginForm: FormGroup;
erroLogin = false;

constructor(private router: Router) {

  this.loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

}

fazerLogin() {

  const { email, senha } = this.loginForm.value;

  if (email === 'admin' && senha === 'admin') {
    this.erroLogin = false;
    this.router.navigate(['/lista']);
  } else {
    this.erroLogin = true;
  }

}

    mostrarSenha = false;

}
