import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../models/sudoku.types';

@Component({
  selector: 'app-row',
  template: `
    <app-cell
      *ngFor="let cell of row; let i = index"
      [cell]="cell"
      class="cell"
      [class.left-thick-line]="i === 0 || i === 3 || i === 6"
      [class.right-thick-line]="i === 8"
    ></app-cell>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px 40px;
      }
      .left-thick-line {
        border-left: black solid 2px !important;
      }
      .right-thick-line {
        border-right: black solid 2px !important;
      }
      .cell {
        border-left: black solid 1px;
        text-align: center;
        line-height: 40px;
      }
    `,
  ],
})
export class RowComponent implements OnInit {
  @Input() row: Row = [null, null, null, null, null, null, null, null, null];

  constructor() {}

  ngOnInit(): void {}
}
