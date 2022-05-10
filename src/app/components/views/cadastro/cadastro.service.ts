import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Cadastro[]> {
    const url = `${this.baseUrl}/cadastros`
    return this.http.get<Cadastro[]>(url)
  }

  findById(id: String): Observable<Cadastro> {
    const url = `${this.baseUrl}/cadastros/${id}`
    return this.http.get<Cadastro>(url)
  }

  create(cadastro: Cadastro): Observable<Cadastro>{
    const url =`${this.baseUrl}/cadastros`
    return this.http.post<Cadastro>(url, cadastro);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/cadastros/${id}`
    return this.http.delete<void>(url)
  }

  update(cadastro: Cadastro):Observable<void> {
    const url = `${this.baseUrl}/cadastros/${cadastro.id}`
    return this.http.put<void>(url, cadastro)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
