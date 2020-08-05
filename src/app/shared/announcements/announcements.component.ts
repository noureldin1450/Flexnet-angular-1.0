import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})

export class AnnouncementsComponent implements OnInit {

  data:any;

  constructor(private api: ApiService) {
    api.Announcements()
      .subscribe(data =>{
        this.data = data;
      });
  }

  
  ngOnInit(): void {}

}
