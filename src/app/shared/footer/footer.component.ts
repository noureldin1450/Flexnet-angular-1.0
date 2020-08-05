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

  constructor(private http: HttpClient) {}

  newsletterForm = new FormGroup({
    email: new FormControl('')
  })

  onSubmit(){
    const body = new HttpParams()
      .set('form-name', 'newsletter')
      .append('email', this.newsletterForm.value.email)
      this.http.post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).subscribe(res =>{
        console.log('send succsesfuly')
      }, err =>{
        console.log('error'+ err)
      })
  }


  ngOnInit(): void {
  }


}
