import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(router:Router){

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    // for every changing in the navigation
    
    navEndEvents.subscribe((event: NavigationEnd) =>{
      gtag('config', 'UA-146859399-3',{
        'page_path': event.urlAfterRedirects
      });
    })

  }


}

