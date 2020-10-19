import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-downloadmovie',
  templateUrl: './downloadmovie.component.html',
  styleUrls: ['./downloadmovie.component.scss']
})
export class DownloadmovieComponent implements OnInit {

  constructor() { }

  @Input() MovieData: any;
  
  fushaarapi240:string;
  fushaarapi480:string;
  fushaarapi1080:string;

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    const MovieData = changes['MovieData']

    //when we had the data from the api
    if (MovieData.currentValue) {
      console.log('data has loaded');

      let fushaarid = this.MovieData.fushaarid;
      let fushaarapi = 'https://bg.stream.fushaar.com/movie/';
      let googleapi = 'https://storage.googleapis.com/neon-reporter-274200.appspot.com/fushaar/media/';
      let ext = '.mp4';

      this.fushaarapi240 = `${fushaarapi}${fushaarid}/${fushaarid}-240p${ext}`;
      this.fushaarapi480 = `${fushaarapi}${fushaarid}/${fushaarid}-480p${ext}`;
      this.fushaarapi1080 = `${fushaarapi}${fushaarid}/${fushaarid}${ext}`;     
      
    }
  }

  

  warning:string = 'Please right click and use Save Target/Link As';
  
  download(){
    alert(this.warning);
    console.log('shit')
  }

  ngOnInit(): void {
  }

}
