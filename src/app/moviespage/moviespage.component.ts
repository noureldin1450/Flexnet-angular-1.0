import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-moviespage',
  templateUrl: './moviespage.component.html',
  styleUrls: ['./moviespage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviespageComponent implements OnInit {

  moviesdata:any;
  loading:boolean = true;

  constructor(private api:ApiService) {
    api.MoviesPage()
      .subscribe(data =>{
        this.moviesdata = data;
        this.loading = false;
      })
  }

  ngOnInit(): void {
  }

}
