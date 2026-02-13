import { Routes } from '@angular/router';
import { Formularios } from './components/pages/formularios/formularios';
import { ListaContatos } from './components/pages/lista-contatos/lista-contatos';
import { Login } from './components/pages/login/login';
import { PerfilContato } from './components/pages/perfil-contato/perfil-contato';

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
    path: 'perfil',
    component: PerfilContato
  },
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  }



];
