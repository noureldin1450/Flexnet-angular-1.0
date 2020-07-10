import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'icon',
})

export class IconPipe implements PipeTransform {

  constructor(private Sanitizer:DomSanitizer){}

  transform(value: string, iconName: string[]): any {
    return  this.Sanitizer.bypassSecurityTrustHtml(`<img src="/assets/icons/${value}.svg" />`);
  }

}
