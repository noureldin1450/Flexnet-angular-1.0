import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tvshow-player',
  templateUrl: './tvshow-player.component.html',
  styleUrls: ['./tvshow-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TvshowPlayerComponent implements OnInit {
    
  @Input() TvshowData;
  
  season: number = 1;
  episode: number = 1;
  iframeLink:string;
  imdbid:string;

  constructor() {
  }

  UpdateEp(Ep){
    this.iframeLink = `https://123files.club/imdb/tv/?id=${this.imdbid}&s=${this.season}&e=${Ep}`;
    this.episode = Ep;
    // alert(this.iframeLink);
  }
  UpdateSe(Se){
    this.iframeLink = `https://123files.club/imdb/tv/?id=${this.imdbid}&s=${Se}&e=${this.episode}`;
    this.season = Se;
    this.episode = 1;
    // alert(this.iframeLink);
  }
  
  ngOnInit(): void {

    let imdbid = this.TvshowData.imdbid;

    console.log(this.TvshowData);

    let iframeLink:string = `https://123files.club/imdb/tv/?id=${imdbid}&s=${this.season}&e=${this.episode}`;


    this.iframeLink = iframeLink;
    this.imdbid = imdbid;

    // alert(iframeLink)

  }

  
}


