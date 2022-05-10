import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    nome: '',
    job: ''
  }

  constructor(private service: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.cadastro).subscribe((resposta) => {
      this.router.navigate(['cadastros'])
      this.service.mensagem('Cadastro criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros'])
  }

}
