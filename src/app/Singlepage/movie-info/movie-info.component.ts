import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieInfoComponent implements OnInit {


  @Input() MovieData: any;

  constructor() { }

  ngOnInit(): void {
  }
}
