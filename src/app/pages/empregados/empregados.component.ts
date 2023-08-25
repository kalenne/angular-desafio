import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmpregado } from 'src/app/core/interfaces/empregado';
import { EmpregadoService } from 'src/app/core/services/empregado.service';

@Component({
  selector: 'app-empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.css'],
})
export class EmpregadosComponent implements OnInit {
  empregados$!: Observable<IEmpregado[]>;

  empregado = {} as IEmpregado;
  box: boolean = false;

  constructor(private empService: EmpregadoService) {}

  ngOnInit(): void {
    this.listaEmpregados();
  }

  listaEmpregados(): Observable<IEmpregado[]> {
    this.empregados$ = this.empService
      .listarEmpregados()
      .pipe(catchError((err) => throwError(() => console.log(err))));

    return this.empregados$;
  }

  showBox(empregado: IEmpregado) {
    this.box = true;
    this.empregado = empregado;
  }

}
