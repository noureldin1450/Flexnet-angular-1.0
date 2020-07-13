import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagsComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.TagsData()
      .subscribe(data =>{
        this.tags = data;
      })
  }

  tags:any;


  ngOnInit(): void {
  }

}
