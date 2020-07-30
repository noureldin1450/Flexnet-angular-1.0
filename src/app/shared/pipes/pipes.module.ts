import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../services/truncate.pipe';
import { TrailerPipe } from '../../trailer.pipe';
import { IconPipe } from '../../icon.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    TrailerPipe,
    IconPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TruncatePipe,
    TrailerPipe,
    IconPipe
  ]
})
export class PipesModule { }
