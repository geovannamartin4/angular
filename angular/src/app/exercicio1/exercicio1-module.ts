import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio1RoutingModule } from './exercicio1-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, Exercicio1RoutingModule],
})
export class Exercicio1Module {}
