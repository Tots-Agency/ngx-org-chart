import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abbreviation'})
export class AbbreviationPipe implements PipeTransform {
  transform(value: string): string {
    const regexPath = /(\b\S)?/g;
    const result = value.match(regexPath)?.join('').toUpperCase();

    return result || '';
  }
}
