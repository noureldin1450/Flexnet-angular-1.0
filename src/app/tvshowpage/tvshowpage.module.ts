import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvshowpageComponent } from './tvshowpage.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TvshowpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LazyLoadImageModule
  ],
  exports:[
    LazyLoadImageModule,
    // SharedModule
  ]
})
export class TvshowpageModule { }
