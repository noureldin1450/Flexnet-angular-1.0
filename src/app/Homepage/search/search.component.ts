import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  slugs:any;

  constructor(private api:ApiService, private router:Router) { 
    api.SlugsData()
      .subscribe(data =>{
        this.slugs = data;
      })
  }

  path:string = "/movies/";
  moviename:string;
  url:string;
  search(){
    this.moviename = this.moviename.replace(/\s/g, '-');
    this.moviename = this.moviename.toLowerCase();
    this.url = this.path+this.moviename;
    // this.location = this.url;
    this.router.navigateByUrl(this.url);
  }
    //   function search() {
    //     var path = "{{.Site.BaseURL}}movies/";
    //     var moveName = document.getElementById("moviename").value;
    //     var moveName = moveName.replace(/\s/g, '-');
    //     var moveName = moveName.toLowerCase();
    //     var url = path + moveName;
    //     //window.open(path+moveName);
    //     window.location = url;
    // }

    // //for the search to work on pressing enter
    // function keyCode(event) {

    //     const enter = event.keyCode;

    //     if (enter == 13) {
    //         search();
    //     }
    // }

  ngOnInit(): void {
  }

}
