import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviePlayerComponent implements OnInit {

  @Input() MovieData: any;

  server: number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
