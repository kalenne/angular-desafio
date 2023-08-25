import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EmpregadosComponent } from './empregados.component';
import { EmpregadoService } from 'src/app/core/services/empregado.service';
import { IEmpregado } from 'src/app/core/interfaces/empregado';
import { Observable, map, of, throwError } from 'rxjs';

const listaEmpregados: IEmpregado[] = [
  {
    salario: "",
    idade: 0,
    genero: "",
    nome: "",
    sobrenome: "",
    telefone: "",
    endereco: "",
    foto: ""
  },
  {
    salario: "01",
    idade: 1,
    genero: "01",
    nome: "01",
    sobrenome: "01",
    telefone: "01",
    endereco: "01",
    foto: "01"
  },
]


fdescribe('EmpregadosComponent', () => {
  let component: EmpregadosComponent;
  let fixture: ComponentFixture<EmpregadosComponent>;
  let service: EmpregadoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregadosComponent ],
      imports: [HttpClientTestingModule],
      providers: [EmpregadoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpregadosComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(EmpregadoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

});
