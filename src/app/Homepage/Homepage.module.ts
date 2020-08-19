import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

// shared modules
import { SharedModule } from '../shared/shared.module';

import { HomepageComponent } from './Homepage.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AnnouncementsComponent } from '../shared/announcements/announcements.component';
import { CategoriesModule } from '../shared/categories/categories.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoriesModule,
    SharedModule,
    FormsModule
  ],

  declarations: [
    HomepageComponent,
    HeaderComponent,
    SearchComponent,
    AnnouncementsComponent
  ],

  exports:[
    HomepageComponent,
    HeaderComponent,
    SearchComponent,
    AnnouncementsComponent
  ],

  providers:[SeoService]
})
export class HomepageModule { }
