import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toActiveState'
})
export class ToActiveStatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
