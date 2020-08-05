import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  submitForm(email: string) {

    console.log(email)

    const urlToHit = "/";

    const dataToSend = new HttpParams()
      .set('form-name', "newsletter")
      .set('email', email);

    console.log(dataToSend);

    console.log(dataToSend.toString());

    return this.http.post(urlToHit, dataToSend.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      observe: "response",
      responseType: "text"
    });

    // return this.http.post(urlToHit, dataToSend.toString(), {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    //   observe: "response",
    //   responseType: "text"
    // });

  }
}
