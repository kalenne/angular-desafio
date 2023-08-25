import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ChartModule
  ]
})
export class HomeModule { }
