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

  MovieData(Slug){
    return this.http.get(`${this.HEADERS}${this.APIURL}movies/${Slug}${this.FORMAT}`)
  }

  TagsData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}tags.json`);
  }

  TagData(tag){
    return this.http.get(`${this.HEADERS}${this.APIURL}tags/${tag}${this.FORMAT}`);
  }

  MoviesData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}movies.json`);
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