import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import * as moment from "moment";

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  public auxData = '';

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
    prof2: ""
  }

  escolaridade = "";

  escolaridades: any [] = [
    {name: 'Analfabeto' },
    {name: 'Fundamental Completo' },
    {name: 'Médio Incompleto' },
    {name: 'Médio Completo' },
    {name: 'Superior Incompleto' },
    {name: 'Superior Completo' },
    {name: 'Mestrado' },
    {name: 'Doutorado' },
    {name: 'Ignorado' },
  ];

  constructor(
    private service: CadastroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pessoa.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.findById();
  }

  findById(): void {
    this.service.findById(this.pessoa.id!).subscribe((resposta) => {
      this.pessoa.nome = resposta.nome
      this.pessoa.cpf = resposta.cpf
      this.pessoa.data = resposta.data
      this.pessoa.email = resposta.email
      this.pessoa.telefone = resposta.telefone
      this.pessoa.escolaridade = resposta.escolaridade
      this.pessoa.funcao = resposta.funcao
      this.auxData = moment(resposta.data).format("DD/MM/YYYY");
      this.pessoa.competencia1 = resposta.competencia1
      this.pessoa.descricao1 = resposta.descricao1;
      this.pessoa.prof1 = resposta.prof1;
      this.pessoa.competencia2 = resposta.competencia2
      this.pessoa.descricao2 = resposta.descricao2;
      this.pessoa.prof2 = resposta.prof2;
    })
  }

  update(): void {
    this.pessoa.data = moment(this.auxData, "DD/MM/YYYY").toDate();
    this.service.update(this.pessoa).subscribe((resposta) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Cadastro atualizado com sucesso!');
    })
  }

  cancel(): void {
    this.router.navigate(["pessoas"])
  }
}
