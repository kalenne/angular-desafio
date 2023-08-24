import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EmpregadosComponent } from './empregados.component';

fdescribe('EmpregadosComponent', () => {
  let component: EmpregadosComponent;
  let fixture: ComponentFixture<EmpregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregadosComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('o get retorna erro', () => {
    
  })
 

});
