import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//slider
import { SliderModule } from './shared/slider/slider.module';

//main modules
import { HomepageModule } from './Homepage/Homepage.module';
import { SinglepageModule } from './Singlepage/Singlepage.module';
import { TagpageModule } from './tagpage/tagpage.module';
import { MoviespageModule } from './moviespage/moviespage.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoriesModule } from './shared/categories/categories.module';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';


//api
import { ApiService } from './services/api.service';
import { ReqpageComponent } from './reqpage/reqpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PagenotfoundComponent,
    ReqpageComponent,
  ],
  imports: [
    SliderModule,
    BrowserModule,
    MoviespageModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomepageModule,
    CategoriesModule,
    SinglepageModule,
    TagpageModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
