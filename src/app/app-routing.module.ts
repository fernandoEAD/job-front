import { CadastroUpdateComponent } from './components/views/cadastro/cadastro-update/cadastro-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroReadComponent } from './components/views/cadastro/cadastro-read/cadastro-read.component';
import { CadastroCreateComponent } from './components/views/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from './components/views/cadastro/cadastro-delete/cadastro-delete.component';
import { AdminReadComponent } from './components/views/cadastro/admin-read/admin-read.component';
import { LoginComponent } from './components/views/cadastro/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pessoas',
    component: CadastroReadComponent
  },
  {
    path: 'pessoas/create',
    component: CadastroCreateComponent
  },
  {
    path: 'pessoas/delete/:id',
    component: CadastroDeleteComponent
  },
  {
    path: 'pessoas/update/:id',
    component: CadastroUpdateComponent
  },
  {
    path: 'pessoas/:id',
    component: CadastroCreateComponent
  },
  {
    path: 'admin',
    component: AdminReadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
