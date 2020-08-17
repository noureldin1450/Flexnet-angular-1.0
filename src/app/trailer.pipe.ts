import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trailer'
})

export class TrailerPipe implements PipeTransform {

  constructor(private Sanitizer:DomSanitizer){}
  
  transform(value: string, kind:string, year:string):any {
    return this.Sanitizer.bypassSecurityTrustHtml(`
      <iframe src="https://www.youtube.com/embed?listType=search&list=${value}+${kind}+(${year})+trailer" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope        picture-in-picture"
        allowfullscreen>
      </iframe>
    `);
  }

}
