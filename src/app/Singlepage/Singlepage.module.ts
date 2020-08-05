import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './Singlepage.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MoviePlayerPipe } from '../services/movie-player.pipe';
import { PlyrModule } from 'ngx-plyr';

//shared module
import { SharedModule } from '../shared/shared.module';

//api
import { ApiService } from '../services/api.service';


//comp
import { HeaderComponent } from './header/header.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { DownloadmovieComponent } from './downloadmovie/downloadmovie.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, 
    PlyrModule,
    SharedModule
  ],

  declarations: [
    SinglepageComponent,
    HeaderComponent,
    MovieInfoComponent,
    MoviePlayerComponent,
    MoviePlayerPipe,
    DownloadmovieComponent,
  ],
  exports:[
    SinglepageComponent,
    HeaderComponent,
    MovieInfoComponent,
    MoviePlayerComponent,
  ],
  providers:[ApiService]
})

export class SinglepageModule { }
