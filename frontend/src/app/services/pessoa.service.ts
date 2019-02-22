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

  // private extractData(res: Response) {
  //   const body = res;
  //   return body || { };
  // }

  getAll(): Observable<Pessoa[]> {
    return this.http.get(endpoint + '/pessoas') as Observable<Pessoa[]>;
  }

  get(id: number): Observable<Pessoa> {
    return this.http.get(endpoint + '/pessoas/' + id) as Observable<Pessoa>;
  }

  delete(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(endpoint + '/pessoas/' + id);
  }

  add(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(endpoint + '/pessoas', JSON.stringify(pessoa), httpOptions);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(endpoint + '/pessoas', JSON.stringify(pessoa), httpOptions);
  }

}
