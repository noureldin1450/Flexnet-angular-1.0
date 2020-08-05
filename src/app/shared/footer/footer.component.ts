import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  newsletterForm = new FormGroup({
    email: new FormControl('')
  })

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'newsletter')
      .append('email', this.newsletterForm.value.email)
    this.http.post('/', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe(res => {
      console.log('send succsesfuly')
    }, err => {
      if (err instanceof ErrorEvent) {
        //client side error
        alert("Something went wrong when sending your message.");
        console.log(err.error.message);
      } else {
        //backend error. If status is 200, then the message successfully sent
        if (err.status === 200) {
          alert("Your message has been sent!");
        } else {
          alert("Something went wrong when sending your message.");
          console.log('Error status:');
          console.log(err.status);
          console.log('Error body:');
          console.log(err.error);
        };
      };
    })
  }


  ngOnInit(): void {
  }


}
