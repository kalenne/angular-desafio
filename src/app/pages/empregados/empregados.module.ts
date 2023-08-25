import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpregadosRoutingModule } from './empregados-routing.module';
import { EmpregadosComponent } from './empregados.component';

import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { TelefonePipe } from 'src/app/core/pipes/telefone.pipe';

@NgModule({
  declarations: [
    EmpregadosComponent,
    TelefonePipe
  ],
  imports: [
    CommonModule,
    EmpregadosRoutingModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    CardModule
  ]
})
export class EmpregadosModule { }
