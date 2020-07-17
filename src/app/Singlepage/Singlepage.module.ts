import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './Singlepage.component';
import { FormsModule } from '@angular/forms';

import { TrailerPipe } from '../trailer.pipe';
import { IconPipe } from '../icon.pipe';
import { MoviePlayerPipe } from '../services/movie-player.pipe';
import { PipesModule } from '../shared/pipes/pipes.module';
import { PlyrModule } from 'ngx-plyr';

//api
import { ApiService } from '../services/api.service';


//comp
import { HeaderComponent } from './header/header.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    PlyrModule
  ],
  declarations: [
    SinglepageComponent,
    HeaderComponent,
    TrailerPipe, 
    IconPipe,
    MovieInfoComponent,
    MoviePlayerComponent,
    MoviePlayerPipe
  ],
  exports:[
    SinglepageComponent,
    HeaderComponent,
    TrailerPipe,
    IconPipe,
    MovieInfoComponent,
    MoviePlayerComponent
  ],
  providers:[ApiService]
})

export class SinglepageModule { }
