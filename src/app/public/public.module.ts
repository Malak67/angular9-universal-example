import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PublicService } from './services/public.service';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent, MainComponent, CounterComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  providers: [
    PublicService
  ]
})
export class PublicModule { }
