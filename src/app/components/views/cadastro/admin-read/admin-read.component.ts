import { Cadastro } from "./../cadastro.model";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CadastroService } from "../cadastro.service";
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartOptions,
  ChartType,
} from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChangeDetectionStrategy, isNgTemplate } from "@angular/compiler";

@Component({
  selector: "app-admin-read",
  templateUrl: "./admin-read.component.html",
  styleUrls: ["./admin-read.component.css"],
})
export class AdminReadComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1,
        max: 5,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };
  public barChartType: ChartType = "bar";
  public barChartPlugins = [ChartDataLabels];

  public barChartData: ChartData<"bar"> = {
    labels: [
      "Ignorado",
      "Fundamental Completo",
      "Médio Incompleto",
      "Médio Completo",
      "Superior Incompleto",
      "Superior Completo",
      "Mestrado",
      "Doutorado",
      "Analfabeto",
    ],
    datasets: [
      {
        data: [
          this.countingProficiency("Ignorado"),
          this.countingProficiency("Fundamental Completo"),
          this.countingProficiency("Médio incompleto"),
          this.countingProficiency("Médio completo"),
          this.countingProficiency("Superior incompleto"),
          this.countingProficiency("Superior completo"),
          this.countingProficiency("Mestrado"),
          this.countingProficiency("Doutorado"),
          this.countingProficiency("Analfabeto"),
        ],
        label: "Nivel de Proficiência",
      },
      //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      this.countingProficiency("Ignorado"),
      this.countingProficiency("Fundamental Completo"),
      this.countingProficiency("Médio incompleto"),
      this.countingProficiency("Médio completo"),
      this.countingProficiency("Superior incompleto"),
      this.countingProficiency("Superior completo"),
      this.countingProficiency("Mestrado"),
      this.countingProficiency("Doutorado"),
      this.countingProficiency("Analfabeto"),
    ];

    this.chart?.update();
  }

  cadastros: Cadastro[] = [];
  displayedColumns: string[] = [
    "id",
    "nome",
    "cpf",
    "funcao",
    "aprovado_reprovado",
    "visualizar",
    "acoes",
  ];

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
    prof2: "",
    isAproved: undefined,
  };

  constructor(private service: CadastroService, private router: Router, private cd : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.cadastros = resposta;
      this.randomize();
    });
  }

  aproved(id: number) {
    this.service.updateIsAproved(id, true).subscribe((_) => {
      this.findAll();
    });
  }
  reproved(id: number) {
    this.service.updateIsAproved(id, false).subscribe((_) => {
      this.findAll();
    });
  }

  navegarParaCadastroCreate() {
    this.router.navigate(["pessoas/create"]);
  }

  aprovedxreproved(value: boolean): String {
    return value === null ? "" : value ? "done" : "close";
  }

  countingProficiency(value: string): number {
    const cadastrofiltrado =
      this.cadastros?.filter((c) => c.escolaridade === value) ?? [];
    return cadastrofiltrado.length;
  }
}

/*
  countingProficiency(value: string): number {
    const cadastrofiltrado =
      this.cadastros?.filter((c) => c.escolaridade.includes(value)) ?? [];
    return cadastrofiltrado.length;
  }

  */