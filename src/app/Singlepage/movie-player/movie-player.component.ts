import { Component,Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviePlayerComponent implements OnChanges {

  @Input() MovieData: any;

  server: number = 1;

  player:boolean = false;

  videoSources: Plyr.Source[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const MovieData = changes['MovieData']
    if (MovieData.currentValue) {
      console.log('data has loaded');
      
      this.pushdata(this.MovieData.fushaarserver.q240, this.MovieData.fushaarserver.q480,this.MovieData.fushaarserver.q1080);
    }
  }
  
  pushdata(q240?:string, q480?:string, q1080?:string) {
    console.log(q240,q480,q1080);
    
    if(typeof q240 !== 'undefined'){
      this.videoSources.push(
        {
          src: `${q240}`,
          type: 'video/mp4',
          size: 240
        });
    }
    if(typeof q480 !== 'undefined'){
      this.videoSources.push(
        {
          src: `${q480}`,
          type: 'video/mp4',
          size: 480
        });
    }
    if(typeof q1080 !== 'undefined'){
      this.videoSources.push(
        {
          src: `${q1080}`,
          type: 'video/mp4',
          size: 1080
        });
    }
    console.log('push data is Done')
    this.player = true;
    console.log('player is shown')

  }


}

