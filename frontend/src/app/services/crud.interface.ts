import { Observable } from 'rxjs';

export interface CRUD<T> {

  getAll(): Observable<T[]>;

  get(id: number): Observable<T>;

  delete(id: number): Observable<T>;

  add(object: T): Observable<T>;

  save(object: T): Observable<T>;

}
