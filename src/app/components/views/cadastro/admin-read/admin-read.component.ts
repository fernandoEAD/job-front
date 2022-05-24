import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-admin-read',
  templateUrl: './admin-read.component.html',
  styleUrls: ['./admin-read.component.css']
})
export class AdminReadComponent implements OnInit {




  cadastros: Cadastro[] = []
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'funcao', 'aprovado_reprovado', 'visualizar', 'acoes'];

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




 

  public doughnutChartLabels:string[] = ['Tamales', 'Tortillas', 'Chorizo'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



}
