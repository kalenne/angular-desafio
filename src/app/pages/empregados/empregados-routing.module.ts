import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpregadosComponent } from './empregados.component';

const routes: Routes = [{ path: '', component: EmpregadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpregadosRoutingModule { }
