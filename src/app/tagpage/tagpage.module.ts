import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagpageComponent } from './tagpage.component';
import { SharedModule } from '../shared/shared.module';
import { SliderModule } from '../shared/slider/slider.module';

@NgModule({
  declarations: [
    TagpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SliderModule
  ],
  exports:[
    TagpageComponent,
    SharedModule,
    SliderModule
  ]
})
export class TagpageModule { }
