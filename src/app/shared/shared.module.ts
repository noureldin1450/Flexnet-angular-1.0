import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { SliderModule } from './slider/slider.module';
import { LoadingComponent } from './loading/loading.component';
import { TagsComponent } from '../Homepage/tags/tags.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoadingComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SliderModule,
    PipesModule,
    RouterModule
  ],
  
  exports:[
    SliderModule,
    PipesModule,
    LoadingComponent,
    TagsComponent,
    RouterModule    
  ]
})
export class SharedModule { }
