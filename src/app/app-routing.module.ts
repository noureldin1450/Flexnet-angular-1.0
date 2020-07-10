import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { SinglepageComponent } from './Singlepage/Singlepage.component';

const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'movies/:slug', component: SinglepageComponent},
  { path:'**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
