import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tvshowpage',
  templateUrl: './tvshowpage.component.html',
  styleUrls: ['./tvshowpage.component.scss']
})
export class TvshowpageComponent implements OnInit {

  TvshowsData:any;
  loading:boolean = true;

  constructor(private api:ApiService) {
    api.TvshowsData()
      .subscribe(data =>{
        this.TvshowsData = data;
        this.loading = false;
      })
  }

  ngOnInit(): void {
  }

}
