import { Component, OnInit, SimpleChanges, OnChanges, ɵɵNgOnChangesFeature } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
//seo
import { SeoService } from '../services/seo.service';


@Component({
  selector: 'app-Singlepage',
  templateUrl: './Singlepage.component.html',
  styleUrls: ['./Singlepage.component.scss']
})

export class SinglepageComponent implements OnInit {

  loading: boolean = true;
  MovieData: any;
  slug: string;
  type: string;

  notfound: boolean = false;
  ErrorMsg: string;

  datatype() {
    //the movie/tv-show name
    this.slug = this.route.snapshot.params.slug;
    //the movie/tv-show name type movie or tv-show
    this.type = this.route.snapshot.url[0].path;
  }


  //this function for switching from the movie endpoint to tv-show endpoing and vis versa 
  dataassign() {

    if (this.type === 'movies') {
      //geting the data from the api with the slug 
      this.api.MovieData(this.slug)
        .subscribe(data => {
          console.log('data has been added....')
          this.MovieData = data;
          this.loading = false;
          console.log('adding the metadata....')
          this.metadata(this.MovieData.title, this.MovieData.story, this.MovieData.moviecover);
        },

          error => {
            this.notfound = true;
            this.loading = false;
            if (this.type === 'movies') {
              this.type = 'movie'
            } if (this.type === 'tv-shows') {
              this.type = 'tv-show'
            }
            this.ErrorMsg = `Sorry we dont have ${this.slug} ${this.type}`;
            console.log(this.notfound);
          }
        )
    } else {

      this.api.TvShowData(this.slug)
        .subscribe(data => {
          console.log('data has been added....')
          this.MovieData = data;
          this.loading = false;
          console.log('adding the metadata....')
          this.metadata(this.MovieData.title, this.MovieData.story, this.MovieData.moviecover);
        },

          error => {
            this.notfound = true;
            this.loading = false;
            if (this.type === 'movies') {
              this.type = 'movie'
            } if (this.type === 'tv-shows') {
              this.type = 'tv-show'
            }
            this.ErrorMsg = `Sorry we dont have ${this.slug} ${this.type}`;
            console.log(this.notfound);
          }
        );
      console.log(this.MovieData)
    }

  }

  metadata(title: string, dis: string, poster: string) {
    //SEO
    this.seo.SEO(title, dis, poster);
  }

  constructor(private api: ApiService, private route: ActivatedRoute, private seo: SeoService) {
    //geting the data type and info from the url
    this.datatype();

    //geting the data from the api endpoint
    this.dataassign();


  };

  //for the emojes script injection
  loadAPI: Promise<any>;
  Url: string = 'https://platform-api.sharethis.com/js/sharethis.js#property=5ed86f8ee9c615001202775d&product=inline-share-buttons';

  ngOnInit() {
    //for the emojes script injection
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving ....');
      console.log('preparing to load...')
      let node = document.createElement('script');
      node.src = this.Url;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    });
  }

}
