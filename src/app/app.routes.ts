import { Routes } from '@angular/router';
import { Formularios } from './components/pages/formularios/formularios';
import { ListaContato } from './components/pages/lista-contato/lista-contato';
import { Login } from './components/pages/login/login';
import { PerfilContato } from './components/pages/perfil-contato/perfil-contato';

export const routes: Routes = [

  {
    path: 'formulario',
    component: Formularios
  },
  {
    path: 'lista',
    component: ListaContato
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'perfil/:id',
    component: PerfilContato
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },




];
