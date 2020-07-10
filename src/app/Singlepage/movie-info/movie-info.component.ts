import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
