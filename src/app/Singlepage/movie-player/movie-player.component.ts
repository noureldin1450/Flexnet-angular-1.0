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
      this.pushdata();
    }
  }
  
  pushdata() {
    this.videoSources.push(
      {
        src: `${this.MovieData.fushaarserver.q240}`,
        type: 'video/mp4',
        size: 240
      },
      {
        src: `${this.MovieData.fushaarserver.q480}`,
        type: 'video/mp4',
        size: 480
      },
      {
        src: `${this.MovieData.fushaarserver.q1080}`,
        type: 'video/mp4',
        size: 1080
      }
    )
    console.log('push data is Done')
    this.player = true;
    console.log('player is shown')

  }


}

