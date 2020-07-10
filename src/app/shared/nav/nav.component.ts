import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor() { }

  isOpen:boolean = false; 

  togglenav(){
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
