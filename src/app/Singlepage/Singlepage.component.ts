import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Singlepage',
  templateUrl: './Singlepage.component.html',
  styleUrls: ['./Singlepage.component.scss']
})
export class SinglepageComponent implements OnInit {

  MovieData:any;
  slug:string;
  
  constructor(private api: ApiService, private route:ActivatedRoute) { 

    //the main movie name
    this.slug = this.route.snapshot.params.slug;

    //geting the data from the api with the slug 
    api.MovieData(this.slug)
      .subscribe(data =>{
        this.MovieData = data;
      })
    };
    
    ngOnInit() {}

}
