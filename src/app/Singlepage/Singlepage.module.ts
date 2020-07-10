import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './Singlepage.component';
import { FormsModule } from '@angular/forms';

import { TrailerPipe } from '../trailer.pipe';
import { IconPipe } from '../icon.pipe';
import { TruncatePipe } from '../services/truncate.pipe';

//api
import { ApiService } from '../services/api.service';
import { HeaderComponent } from './header/header.component';



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
    TruncatePipe
  ],
  exports:[
    SinglepageComponent,
    HeaderComponent,
    TrailerPipe,
    IconPipe
  ],
  providers:[ApiService]
})

export class SinglepageModule { }
