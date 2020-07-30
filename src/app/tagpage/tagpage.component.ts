import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tagpage',
  templateUrl: './tagpage.component.html',
  styleUrls: ['./tagpage.component.scss']
})

export class TagpageComponent implements OnInit {

  loading:boolean = true;
  TagData:any;
  tagname:string = this.route.snapshot.params.tag;

  constructor(private api:ApiService,private route:ActivatedRoute) { 
    api.TagData(this.tagname)
      .subscribe(data => {
        this.TagData = data;
        this.loading = false;
      });
  }

  ngOnInit(): void {}

}
