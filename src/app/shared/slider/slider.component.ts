import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperLazyInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  @Input() moviesData:any;



  config: SwiperConfigInterface | SwiperLazyInterface = {
    slidesPerView: 3.3,
    navigation: false,
    pagination: false,
    spaceBetween: 10,
    scrollbar: false,
    uniqueNavElements: false,
    freeModeMomentumRatio: 1,
    followFinger: true,
    allowTouchMove: true,
    freeMode: true,
    lazy: true,
    loadPrevNextAmount: 1,
    // grabCursor: true,
    //the ammount of draging effect
    // slideToClickedSlide: true,
    // mousewheel: true,
    // loop: true,
    // slidesOffsetBefore: 100,
    // slidesOffsetAfter: 100,
    breakpoints:{
      1000:{
        slidesPerView: 2.8
      },
      500:{
        slidesPerView: 2.2
      },
      300:{
        slidesPerView: 1.2
      }
    }

  }

  constructor() { }

  ngOnInit(): void {}

}
