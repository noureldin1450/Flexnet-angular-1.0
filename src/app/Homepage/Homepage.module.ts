import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './Homepage.component';
import { TagsComponent } from './tags/tags.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomepageComponent,
    TagsComponent,
    HeaderComponent
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }
