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
    [
      {
        1: true,
        2: true,
        3: true,
        4: false,
        5: true,
        6: false,
        7: true,
        8: false,
        9: true,
      },
      null,
      null,
      null,
      2,
      7,
      null,
      null,
      null,
    ],
    [null, null, null, 5, 9, 4, null, 2, 7],
    [null, null, null, null, null, null, 6, null, null],
    [8, null, null, 1, null, 5, 4, null, null],
    [null, null, null, null, null, 8, null, 5, 3],
    [null, null, 4, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, 6, null],
    [null, 9, null, null, 3, null, 1, null, null],
    [5, 1, null, null, null, 2, null, null, null],
  ];

  currentlySelected$ = this._sudokuService.currentlySelected$;

  constructor(private _sudokuService: SudokuService) {}
}
