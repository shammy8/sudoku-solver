import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Sudoku } from './models/sudoku.types';
import { SudokuService } from './sudoku.service';

@Component({
  selector: 'app-root',
  template: `
    <app-row
      *ngFor="let row of sudoku; let i = index"
      [row]="row"
      [rowNo]="$any(i)"
      [currentlySelected]="currentlySelected$ | async"
      class="row"
      [class.top-thick-line]="i === 0 || i === 3 || i === 6"
      [class.bottom-thick-line]="i === 8"
    ></app-row>
  `,
  styles: [
    `
      :host {
        display: inline-grid;
        grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px 40px;
      }
      .top-thick-line {
        border-top: black solid 2px !important;
      }
      .bottom-thick-line {
        border-bottom: black solid 2px !important;
      }
      .row {
        border-top: black solid 1px;
        height: 40px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  sudoku: Sudoku = [
    [1, 2, 3, [1, 1], null, 3, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  currentlySelected$ = this._sudokuService.currentlySelected$;

  constructor(private _sudokuService: SudokuService) {}
}
