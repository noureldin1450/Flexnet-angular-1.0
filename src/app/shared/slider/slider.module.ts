import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
//slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SliderComponent } from './slider.component';


//default settings for the swiper slider
const default_swiper_config:SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    SwiperModule
  ],

  exports:[
    PipesModule,
    SwiperModule,
    SliderComponent
  ],
  
  providers:[
    {
      provide: SWIPER_CONFIG,
      useValue: default_swiper_config
    }
  ]
})
export class SliderModule { }
