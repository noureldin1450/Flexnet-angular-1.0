import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private update:SwUpdate) {
    update.available.subscribe(event => {
      if(event.available){
        document.location.reload();
      }
    })
  }
}
