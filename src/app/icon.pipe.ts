import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
})

export class IconPipe implements PipeTransform {

  constructor(){}

  transform(value: string, iconName: string[]): any {
    return  `<img src="/assets/icons/${value}.svg" />`;
  }

}
