import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Cell, Coordinates, zeroToEight } from '../models/sudoku.types';
import { SudokuService } from '../sudoku.service';

@Component({
  selector: 'app-cell',
  template: ` {{ cell }} `,
  styles: [
    `
      :host {
        /* display: inline-block; */
      }
      :host.highlight {
        background-color: lightgray;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnChanges {
  @Input() cell: Cell = null;

  @Input() rowNo: zeroToEight = 0;

  @Input() colNo: zeroToEight = 0;

  @Input() currentlySelected: Coordinates | null = { colNo: null, rowNo: null };

  @HostListener('click') onClick() {
    this.sudokuService.selectCoordinates({
      rowNo: this.rowNo,
      colNo: this.colNo,
    });
  }

  @HostBinding('class.highlight')
  highlight = false;

  ngOnChanges(changes: SimpleChanges) {
    const currentlySelected: Coordinates =
      changes['currentlySelected'].currentValue;

    if (
      currentlySelected.rowNo === this.rowNo &&
      currentlySelected.colNo === this.colNo
    ) {
      this.highlight = true;
    } else {
      this.highlight = false;
    }
  }

  constructor(private sudokuService: SudokuService) {}
}
