import { Pipe, PipeTransform } from '@angular/core';

import { Cell } from './models/sudoku.types';

@Pipe({
  name: 'isCandidates',
  pure: true,
})
export class IsCandidatesPipe implements PipeTransform {
  transform(cell: Cell): boolean {
    if (typeof cell === 'object' && cell !== null) {
      return true;
    }
    return false;
  }
}
