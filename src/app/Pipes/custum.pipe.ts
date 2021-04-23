import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custum',
})
export class CustumPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    // return null;
    return value.split('').join(args[0] || '-');
  }
}
