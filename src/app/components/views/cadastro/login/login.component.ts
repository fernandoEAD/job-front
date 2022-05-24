import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any;

  emailDB: string = "teste123";

  senhaDB: string = "teste123";

  mensagem: string | undefined;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.criarForm();
   }

   criarForm() {
    this.form = this.formBuilder.group({
        nome: [''],
        senha: ['']
    });
}

  ngOnInit(): void {
  }

  login()
  {
    if (this.form.get('nome').value == this.emailDB && this.form.get('senha').value == this.senhaDB) {
        this.mensagem = "Login feito com sucesso!";
        this.router.navigate(["admin"])
    } else {
      this.mensagem = "Nome ou a senha estar errado!"; 
    }
  }
}
