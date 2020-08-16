import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  latestmovies:any;
  topmovies:any;
  moviesData:any;
  tvshowsData:any;
  TagsMovies:any;

  constructor(private api:ApiService, private seo:SeoService) { 
    api.MoviesData()
      .subscribe(data =>{
        this.moviesData = data;
        this.latestmovies = this.moviesData.latestmovies;
        this.topmovies = this.moviesData.topmovies; 
      });
    
    api.HomePageTagsData()
      .subscribe(data => {
        this.TagsMovies = data;
      });

    api.TvshowsData()
      .subscribe(data =>{
        this.tvshowsData = data;
      });

    console.log(this.tvshowsData)
  }

  ngOnInit() {
    this.seo.SEO('Flexnet - watch free cinema movies online. flexnet free new movies online');
  }
}
