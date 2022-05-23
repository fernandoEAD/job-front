import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro: Cadastro = {
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
    prof2: ""
  }

  constructor(private service: CadastroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cadastro.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.findById()
  }

  findById(): void {
    this.service.findById(this.cadastro.id!).subscribe((resposta) => {
      this.cadastro.nome = resposta.nome
      this.cadastro.funcao = resposta.funcao
    })
  }

  delete(): void {
    this.service.delete(this.cadastro.id!).subscribe((resposta) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Cadastro deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['pessoas'])
  }


}
