import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

//pages
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { SinglepageComponent } from './Singlepage/Singlepage.component';
import { TagpageComponent } from './tagpage/tagpage.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { CategoriesComponent } from './shared/categories/categories.component';
import { ReqpageComponent } from './reqpage/reqpage.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'movies/:slug', component: SinglepageComponent},
  { path:'tags/:tag', component: TagpageComponent},
  { path:'movies', component: MoviespageComponent },
  { path:'categories', component: CategoriesComponent },
  { path:'request', component: ReqpageComponent },
  { path:'**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


