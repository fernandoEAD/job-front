import { Competencia } from './../competencia.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { Cadastro } from "../cadastro.model";
import { CadastroService } from "../cadastro.service";

@Component({
  selector: "app-cadastro-create",
  templateUrl: "./cadastro-create.component.html",
  styleUrls: ["./cadastro-create.component.css"],
})
export class CadastroCreateComponent implements OnInit {
  public auxData = "";

  public descricao = "";

  public proeficiencia = "";

  public nome = "";

  pessoa: Cadastro = {
    nome: "",
    cpf: "",
    data: undefined,
    email: "",
    telefone: "",
    escolaridade: "", 
    funcao: "",
    competencia1: "",
    descricao1: "",
    prof1: "",
    competencia2: "",
    descricao2: "",
    prof2: ""
  };

  //competencia: Competencia = {
    //nome: '',
    //descricao: '',
    //pessoaId: 0,
    //proeficienciaId: 0
  //}
  
  escolaridade = "";

  escolaridades: any[] = [
    { name: "Analfabeto" },
    { name: "Fundamental Completo" },
    { name: "Médio Incompleto" },
    { name: "Médio Completo" },
    { name: "Superior Incompleto" },
    { name: "Superior Completo" },
    { name: "Mestrado" },
    { name: "Doutorado" },
    { name: "Ignorado" },
  ];

  prof1 = "";

  profs1: any[] = [
    { name: "Avançado"},
    { name: "Intermediário"},
    { name: "Básico"},
  ]

  prof2 = "";

  profs2: any[] = [
    { name: "avançado"},
    { name: "Intermediario"},
    { name: "Basico"},
  ]

  constructor(
    private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.createOrUpdate()) {
      this.pessoa.id = parseInt(this.route.snapshot.paramMap.get("id")!);
      this.findById();
    }
  }

  createOrUpdate(): boolean {
    if (parseInt(this.route.snapshot.paramMap.get("id")!)) {
      return true;
    } else {
      return false;
    }
  }

  create(): void {
    //console.log(this.pessoa.competencia);
    this.pessoa.data = moment(this.auxData, "DD/MM/YYYY").toDate();
    this.service.create(this.pessoa).subscribe((resposta) => {
      this.router.navigate(["pessoas"]);
      this.service.mensagem("Cadastro criado com sucesso!");
    });
  }
  

  findById(): void {
    this.service.findById(this.pessoa.id!).subscribe((resposta) => {
      this.pessoa.nome = resposta.nome;
      this.pessoa.cpf = resposta.cpf;
      this.pessoa.data = resposta.data;
      this.pessoa.email = resposta.email;
      this.pessoa.escolaridade = resposta.escolaridade;
      this.pessoa.telefone = resposta.telefone;
      this.pessoa.funcao = resposta.funcao;
      this.auxData = moment(resposta.data).format("DD/MM/YYYY");
      this.pessoa.competencia1 = resposta.competencia1
      this.pessoa.descricao1 = resposta.descricao1;
      this.pessoa.prof1 = resposta.prof1;
      this.pessoa.competencia2 = resposta.competencia2
      this.pessoa.descricao2 = resposta.descricao2;
      this.pessoa.prof2 = resposta.prof2;
    });
  }

  cancel(): void {
    this.router.navigate(["pessoas"]);
  }
}
