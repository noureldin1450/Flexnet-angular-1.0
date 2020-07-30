import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { SliderModule } from './slider/slider.module';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SliderModule,
    PipesModule
  ],
  
  exports:[
    SliderModule,
    PipesModule,
    LoadingComponent
  ]
})
export class SharedModule { }
