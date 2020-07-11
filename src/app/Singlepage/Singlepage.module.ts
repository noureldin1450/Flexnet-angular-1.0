import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './Singlepage.component';
import { FormsModule } from '@angular/forms';

import { TrailerPipe } from '../trailer.pipe';
import { IconPipe } from '../icon.pipe';
import { TruncatePipe } from '../services/truncate.pipe';
import { MoviePlayerPipe } from '../services/movie-player.pipe';
//api
import { ApiService } from '../services/api.service';
import { HeaderComponent } from './header/header.component';


//comp
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SinglepageComponent,
    HeaderComponent,
    TrailerPipe, 
    IconPipe,
    TruncatePipe,
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
