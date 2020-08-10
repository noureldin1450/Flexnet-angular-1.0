import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private update:SwUpdate) {
    update.available.subscribe(event => {
      if(event.available){
        alert('Click on ok to get the new update');
        document.location.reload();
      }
    })
  }
}
