import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { SliderModule } from './slider/slider.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SliderModule,
    PipesModule
  ],
  exports:[
    SliderModule,
    PipesModule
  ]
})
export class SharedModule { }
