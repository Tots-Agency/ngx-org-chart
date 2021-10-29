import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abbreviation' })
export class AbbreviationPipe implements PipeTransform {
  transform(value: string): string | undefined {
    const abbreviatedValue = value.match(/\b([A-Za-z])/g)?.join('').toUpperCase();
    return abbreviatedValue;
  }
}
