import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './Homepage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomepageComponent
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }
