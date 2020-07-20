import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  latestmovies:any;
  topmovies:any;
  moviesData:any;

  constructor(private api:ApiService) { 
    api.MoviesData()
      .subscribe(data =>{
        this.moviesData = data;
        this.latestmovies = this.moviesData.latestmovies   
        this.topmovies = this.moviesData.topmovies 
        console.log(this.moviesData)
        console.log(this.latestmovies)
        console.log(this.topmovies)
      })
  }

  ngOnInit() {
  }

}
