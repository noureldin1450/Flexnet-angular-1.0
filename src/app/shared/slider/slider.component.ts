import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperLazyInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  defaultimage:string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FyoJ8iaULJd59S%2F200.gif&f=1&nofb=1';
  errorimage:string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F26xBIygOcC3bAWg3S%2Fgiphy.gif&f=1&nofb=1'
  @Input() moviesData: any;
  @Input() title: string;
  @Input() icon?: string;
  @Input() amount?: number;


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
    grabCursor: true,
    //the ammount of draging effect
    slideToClickedSlide: true,
    // mousewheel: true,
    // loop: true,
    // slidesOffsetBefore: 30,
    slidesOffsetAfter: 70,
    breakpoints: {
      1000: {
        slidesPerView: 2.8
      },
      500: {
        slidesPerView: 1.2
      },
      300: {
        slidesPerView: 1.2
      }
    }

  }

  constructor() {}


  ngOnInit(): void {


  }

}
