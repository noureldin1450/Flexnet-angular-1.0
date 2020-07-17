import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

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

  // {
  //   src:'https://storage.googleapis.com/neon-reporter-274200.appspot.com/fushaar/media/30161/30161-240p.mp4',
  //   type:'video/mp4',
  //   size: 240
  // },
  // {
  //   src:'https://storage.googleapis.com/neon-reporter-274200.appspot.com/fushaar/media/30161/30161-480p.mp4',
  //   type:'video/mp4',
  //   size: 480
  // }



  constructor() {
    //     if(!this.MovieData){
    //   console.log('no data');
    // }
    // if(typeof this.MovieData !== 'undefined'){
    //   console.log('here data');
    //   console.log(this.MovieData.title);
    // }
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.videoSources.push(
        // {
        //   src:'https://storage.googleapis.com/neon-reporter-274200.appspot.com/fushaar/media/30161/30161-480p.mp4',
        //   type:'video/mp4',
        //   size: 480
        // }
      )
      // this.player = true
    }, 3000);

  }

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

