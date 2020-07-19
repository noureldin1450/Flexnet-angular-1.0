import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  moviesData:any;

  constructor(private api:ApiService) { 
    api.MoviesData()
      .subscribe(data =>{
        this.moviesData = data;
        console.log(this.moviesData)
      })
  }

  ngOnInit() {
  }

}
