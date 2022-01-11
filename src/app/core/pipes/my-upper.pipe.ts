import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpper',
  pure:false
})
export class MyUpperPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let demo = value.slice(0,5);
    return demo.toUpperCase();
  }

}
