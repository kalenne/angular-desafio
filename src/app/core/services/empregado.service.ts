import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmpregado } from '../interfaces/empregado';
import {
  Observable,
  shareReplay,
  of,
  tap,
  isEmpty,
  catchError,
  throwError,
  map,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpregadoService {
  api = 'http://localhost:3000/empregados';

  constructor(private http: HttpClient) {}

  listarEmpregados(): Observable<IEmpregado[]> {
    return this.http.get<IEmpregado[]>(this.api).pipe(shareReplay());
  }

  cadastrarEmpregado(empregado: IEmpregado): Observable<IEmpregado> {
    return this.http.post<IEmpregado>(this.api, empregado).pipe(
      switchMap((response) => {
        return of(response);
      }),
      catchError((err) => throwError(() => console.log(err)))
    );
  }

  deletarEmpregado(id: string):Observable<Object> {
    return this.http.delete(`${this.api}/${id}`).pipe(
      switchMap((response) => {
        return of(response);
      }),
      catchError((err) => throwError(() => console.log(err)))
    );
  }
}
