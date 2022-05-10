import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroReadComponent } from './components/views/cadastro/cadastro-read/cadastro-read.component';
import { CadastroCreateComponent } from './components/views/cadastro/cadastro-create/cadastro-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastros',
    component: CadastroReadComponent
  },
  {
    path: 'cadastros/create',
    component: CadastroCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
