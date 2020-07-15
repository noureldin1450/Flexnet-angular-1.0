import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';


import { HomepageComponent } from './Homepage.component';
import { TagsComponent } from './tags/tags.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
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
  ]
})
export class HomepageModule { }
