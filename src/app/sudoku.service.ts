import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Coordinates } from './models/sudoku.types';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  currentlySelected$: Observable<Coordinates> = of({
    colNo: null,
    rowNo: null,
  });

  private _currentlySelected$ = new BehaviorSubject<Coordinates>({
    colNo: null,
    rowNo: null,
  });

  constructor() {
    this.currentlySelected$ = this._currentlySelected$.asObservable();
  }

  selectCoordinates(cellCoordinates: Coordinates) {
    this._currentlySelected$.next(cellCoordinates);
  }
}
