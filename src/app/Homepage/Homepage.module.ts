import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

// shared modules
import { SharedModule } from '../shared/shared.module';

import { HomepageComponent } from './Homepage.component';
import { TagsComponent } from './tags/tags.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],

  declarations: [
    HomepageComponent,
    TagsComponent,
    HeaderComponent,
    LoadingComponent,
    SearchComponent
  ],

  exports:[
    HomepageComponent,
    HeaderComponent,
    LoadingComponent,
    SearchComponent
  ],

  providers:[SeoService]
})
export class HomepageModule { }
