import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros: Cadastro[] = []
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'funcao', 'aprovado_reprovado', 'acoes'];

  pessoa: Cadastro = {
    nome: '',
    cpf: '',
    data: undefined,
    email: '',
    telefone: '',
    escolaridade: '',
    funcao: '',
    competencia1: "",
    descricao1: "",
    prof1: "",
    competencia2: "",
    descricao2: "",
    prof2: "",
    isAproved: undefined
  }

  constructor(private service: CadastroService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.cadastros = resposta;
    })
  }

  aproved(id:number){
    this.service.updateIsAproved(id, true).subscribe(_ => {
    this.findAll();
  })
}
  reproved(id:number){
    this.service.updateIsAproved(id, false).subscribe(_ => {
      this.findAll();
    })
  }

  navegarParaCadastroCreate() {
    this.router.navigate(["pessoas/create"])
  }

  aprovedxreproved (value : boolean ) : String {
    return value === null? '' : value ? 'done' : 'close' ;
  }
}
