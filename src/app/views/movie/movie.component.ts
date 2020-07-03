import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  slug:string = '';
  
  Domain:string ='https://flexnet.ga/movies/'; 
  apiEndPoing:string = 'https://flexnet-api.herokuapp.com/';
  extention:string = '/index.json';

  resp:any;

  constructor( private activeRouute: ActivatedRoute, private https:HttpClient ) {

    this.activeRouute.params.subscribe(data => {

      this.slug = data.slug;

      // let url = `${this.api}${this.slug}${this.extention}`;
      let url = `${this.apiEndPoing}${this.Domain}${data.slug}${this.extention}`;

      this.https.get(url).subscribe(data => {
        this.resp = data;
      })

    })


  }

  ngOnInit(): void {
  } 

}
