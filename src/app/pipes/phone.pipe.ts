import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if (value) {
      if (value.slice(0, 1) === '+' && value.length === 12) {
        const part1 = value.slice(0, 3) + ' ';
        const part2 = value.slice(3, 5) + ' ';
        const part3 = value.slice(5, 8) + ' ';
        const part4 = value.slice(8, 10) + ' ';
        const part5 = value.slice(10, 12) + ' ';
        return part1 + part2 + part3 + part4 + part5;
      } else if (value.length === 10 && value[0] !== '+') {
        const part1 = value.slice(0, 3) + ' ';
        const part2 = value.slice(3, 6) + ' ';
        const part3 = value.slice(6, 8) + ' ';
        const part4 = value.slice(8, 10) + ' ';
        return part1 + part2 + part3 + part4;
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

}
