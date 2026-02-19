import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [Container, Separador, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  erroLogin = false;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      remember: new FormControl(true),
    });
  }

  fazerLogin() {
    /*if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }*/

    const { email, senha, remember } = this.loginForm.value;

    if (email === 'admin@gmail' && senha === 'admin') {
      this.erroLogin = false;
      this.router.navigate(['/lista']);
    } else {
      this.erroLogin = true;
    }

    if (remember) { /* armazena o email no localStorage */
      localStorage.setItem('remeberEmail', email);
    } else {
      localStorage.removeItem('rememberEmail');
    }
  }

  ngOnInit() {
    const remembered = localStorage.getItem('rememberEmail')
    if(remembered){
      this.loginForm.patchValue({
        email: remembered, remember: true
      })
    }
  }

  mostrarSenha = false;
}
