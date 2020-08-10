import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment'
import { UpdateService } from './services/update.service';


declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  analytics:string;

  constructor(router:Router, private update:UpdateService){
    this.analytics = environment.analytics;
    
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    // for every changing in the navigation
    navEndEvents.subscribe((event: NavigationEnd) =>{
      gtag('config', this.analytics,{
        'page_path': event.urlAfterRedirects
      });
    })

  }


}

