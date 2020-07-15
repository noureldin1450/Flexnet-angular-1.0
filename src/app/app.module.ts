import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//main modules
import { HomepageModule } from './Homepage/Homepage.module';
import { SinglepageModule } from './Singlepage/Singlepage.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';


//api
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomepageModule,
    SinglepageModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
