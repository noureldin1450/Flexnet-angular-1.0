


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {}
  
  msg:string = 'Hello world';

  href:string = 'https://flexnet.ga';

  click(name){
    alert(`hello ${name}`)
  }


  name:string = 'NourELdin';

  readName(): void{
    if(this.name != ''){
      alert(`Nice to meet you ${this.name}`)
    }else{
      alert('add your name please');
    }
  }

}

