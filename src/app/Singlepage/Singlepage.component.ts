import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Singlepage',
  templateUrl: './Singlepage.component.html',
  styleUrls: ['./Singlepage.component.scss']
})
export class SinglepageComponent implements OnInit {

  MovieData: any;
  slug: string;

  constructor(private api: ApiService, private route: ActivatedRoute) {

    //the main movie name
    this.slug = this.route.snapshot.params.slug;

    //geting the data from the api with the slug 
    api.MovieData(this.slug)
      .subscribe(data => {
        this.MovieData = data;
      })
  };


  loadAPI: Promise<any>;

  Url: string = 'https://platform-api.sharethis.com/js/sharethis.js#property=5ed86f8ee9c615001202775d&product=inline-share-buttons';

  ngOnInit() {
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
