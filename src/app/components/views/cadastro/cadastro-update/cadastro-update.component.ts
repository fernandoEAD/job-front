import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  cadastro: Cadastro = {
    id: '',
    nome: '',
    job: ''
  }

  constructor(
    private service: CadastroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cadastro.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cadastro.id!).subscribe((resposta) => {
      this.cadastro.nome = resposta.nome
      this.cadastro.job = resposta.job
    })
  }

  update(): void {
    this.service.update(this.cadastro).subscribe((resposta) => {
      this.router.navigate(['cadastros'])
      this.service.mensagem('Cadastro atualizado com sucesso!');
    }, err => {
      this.service.mensagem("Verificar se todos os campos estão preenchidos corretamente!")
    })
  }

  cancel(): void {
    this.router.navigate(["cadastros"])
  }

}
