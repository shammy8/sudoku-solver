import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import {
  Cell,
  CurrentlySelectedCell,
  zeroToEight,
} from '../models/sudoku.types';
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
        background-color: lightblue;
      }
      :host.light-gray-highlight {
        background-color: #f0f0f0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnChanges {
  @Input() cell: Cell = null;

  @Input() rowNo: zeroToEight = 0;

  @Input() colNo: zeroToEight = 0;

  @Input() currentlySelected: CurrentlySelectedCell | null = {
    number: null,
    coordinates: { colNo: null, rowNo: null },
  };

  @HostListener('click') onClick() {
    this.sudokuService.onCellSelect({
      number: this.cell,
      coordinates: { rowNo: this.rowNo, colNo: this.colNo },
    });
  }

  @HostBinding('class.highlight')
  highlight = false;

  @HostBinding('class.light-gray-highlight')
  lightGrayHighlight = false;

  ngOnChanges(changes: SimpleChanges) {
    const currentlySelected: CurrentlySelectedCell =
      changes['currentlySelected'].currentValue;

    if (
      currentlySelected.coordinates.rowNo === this.rowNo &&
      currentlySelected.coordinates.colNo === this.colNo
    ) {
      this.highlight = true;
      this.lightGrayHighlight = false;
    } else if (
      currentlySelected.coordinates.rowNo === this.rowNo ||
      currentlySelected.coordinates.colNo === this.colNo
    ) {
      this.highlight = false;
      this.lightGrayHighlight = true;
    } else {
      this.highlight = false;
      this.lightGrayHighlight = false;
    }
  }

  constructor(private sudokuService: SudokuService) {}
}
