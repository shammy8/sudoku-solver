import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../models/sudoku.types';

@Component({
  selector: 'app-cell',
  template: ` {{ cell }} `,
  styles: [
    `
      :host {
        /* display: inline-block; */
      }
    `,
  ],
})
export class CellComponent implements OnInit {
  @Input() cell: Cell = null;

  constructor() {}

  ngOnInit(): void {}
}
