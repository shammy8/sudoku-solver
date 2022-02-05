import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { CurrentlySelectedCell } from './models/sudoku.types';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  currentlySelected$: Observable<CurrentlySelectedCell> = of({
    number: null,
    coordinates: { colNo: null, rowNo: null },
    subGridCoordinates: {
      rowNo: null,
      colNo: null,
    },
  });

  private _currentlySelected$ = new BehaviorSubject<CurrentlySelectedCell>({
    number: null,
    coordinates: { colNo: null, rowNo: null },
    subGridCoordinates: {
      rowNo: null,
      colNo: null,
    },
  });

  constructor() {
    this.currentlySelected$ = this._currentlySelected$.asObservable();
  }

  onCellSelect(cell: CurrentlySelectedCell) {
    this._currentlySelected$.next(cell);
  }
}
