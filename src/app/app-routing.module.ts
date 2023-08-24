import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'empregados', loadChildren: () => import('./pages/empregados/empregados.module').then(m => m.EmpregadosModule) },
  { path: 'cadastro', loadComponent: () => import('./pages/empregados/cadastro/cadastro.component').then(c => c.CadastroComponent) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
