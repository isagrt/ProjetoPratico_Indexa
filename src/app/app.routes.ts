import { Routes } from '@angular/router';
import { Formularios } from './components/pages/formularios/formularios';
import { ListaContatos } from './components/pages/lista-contatos/lista-contatos';

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
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  }



];
