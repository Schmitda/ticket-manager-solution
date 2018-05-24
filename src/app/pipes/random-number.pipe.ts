import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'randomNumber'
})
export class RandomNumberPipe implements PipeTransform {

  transform(value: any, min: number, max: number): any {

    return (Math.random() * (max - min + 1));
  }

}
