import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { CRUD } from './crud.interface';
import { Pessoa } from '../models/pessoa.model';


// proxy configurado para http://localhost:8080
const endpoint = 'http://localhost:4200/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PessoaService implements CRUD<Pessoa> {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Pessoa[]> {
    return this.http.get(endpoint + '/pessoas') as Observable<Pessoa[]>;
  }

  public get(id: number): Observable<Pessoa> {
    return this.http.get(endpoint + '/pessoas/' + id) as Observable<Pessoa>;
  }

  public delete(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(endpoint + '/pessoas/' + id);
  }

  public add(pessoa: Pessoa): Observable<Pessoa> {
    pessoa = this.normalize(pessoa);
    return this.http.post<Pessoa>(endpoint + '/pessoas', JSON.stringify(pessoa), httpOptions);
  }

  public save(pessoa: Pessoa): Observable<Pessoa> {
    pessoa = this.normalize(pessoa);
    return this.http.put<Pessoa>(endpoint + '/pessoas', JSON.stringify(pessoa), httpOptions);
  }

  private normalize(pessoa: Pessoa): Pessoa {
    if (pessoa.hasOwnProperty('cpf')) {
      pessoa.cpf = onlyNumbers(pessoa.cpf);
    }
    if (pessoa.hasOwnProperty('telefone')) {
      pessoa.telefone = onlyNumbers(pessoa.telefone);
    }
    return pessoa;
  }

}

export function onlyNumbers(string: string): string {
  if (string !== null && string !== undefined) {
    return string.replace(/\D+/g, '');
  } else {
    return string;
  }
}
