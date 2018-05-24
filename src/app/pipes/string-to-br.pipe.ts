import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringToBr'
})
export class StringToBrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.replace(/\n/gi, '<br>');
    } else {
      return null;
    }
  }

}
