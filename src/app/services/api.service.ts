import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  
  APIURL:string = 'https://flexnet-api.netlify.app/';
  HEADERS:string = 'https://flexnet-api.herokuapp.com/';
  FORMAT:string = '/index.json';

  //geting the data for every single movie and tvshow
  MovieData(Slug){
    return this.http.get(`${this.HEADERS}${this.APIURL}movies/${Slug}${this.FORMAT}`)
  }

  TvShowData(Slug){
    return this.http.get(`${this.HEADERS}${this.APIURL}tv-shows/${Slug}${this.FORMAT}`)
  }

  //global data
  TagsData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}tags.json`);
  }

  TagData(tag){
    return this.http.get(`${this.HEADERS}${this.APIURL}tags/${tag}${this.FORMAT}`);
  }

  MoviesData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}movies.json`);
  }

  TvshowsData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}tvshows.json`);
  }

  MoviesPage(){
    return this.http.get(`${this.HEADERS}${this.APIURL}moviespage.json`);
  }
  
  TvshowPage(){
    return this.http.get(`${this.HEADERS}${this.APIURL}alltvshows.json`);
  }
  
  
  SlugsData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}slugs.json`);
  }

  HomePageTagsData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}homepagetags.json`);
  }

  Announcements(){
    return this.http.get(`${this.HEADERS}${this.APIURL}announcements.json`);
  }


}