import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieInfoComponent implements OnInit {


  @Input() MovieData: any;

  constructor(private seo:SeoService) { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges) {
    const MovieData = changes['MovieData'];
    if (MovieData.currentValue) {
      //SEO
      this.seo.SEO(this.MovieData.title,this.MovieData.story,this.MovieData.moviecover);
    }
  }

}
