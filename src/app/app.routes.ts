import { Routes } from '@angular/router';
import { Formularios } from './components/pages/formularios/formularios';
import { ListaContatos } from './components/pages/lista-contatos/lista-contatos';
import { Login } from './components/pages/login/login';

export const routes: Routes = [

  {
    path: 'formulario',
    component: Formularios
  },
  {
    path: 'lista',
    component: ListaContatos
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }



];
