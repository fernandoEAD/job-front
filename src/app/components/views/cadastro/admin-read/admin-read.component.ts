import { Cadastro } from './../cadastro.model';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { isNgTemplate } from '@angular/compiler';





@Component({
  selector: 'app-admin-read',
  templateUrl: './admin-read.component.html',
  styleUrls: ['./admin-read.component.css']
})
export class AdminReadComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    ChartDataLabels
  ];

  public barChartData: ChartData<'bar'> = { 

    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Nivel de Proficiência' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

  cadastros: Cadastro[] = []
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'funcao', 'aprovado_reprovado', 'visualizar', 'acoes'];

  pessoa: Cadastro = {
    nome: '',
    cpf: '',
    data: undefined,
    email: '',
    telefone: '',
    escolaridade: "",
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
