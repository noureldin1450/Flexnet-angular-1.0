import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  
  APIURL:string = 'https://flexnet-api.netlify.app/movies/';
  HEADERS:string = 'https://flexnet-api.herokuapp.com/';
  FORMAT:string = '/index.json';

  MovieData(Slug){
    return this.http.get(`${this.HEADERS}${this.APIURL}${Slug}${this.FORMAT}`)
  }


}