import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  Cell,
  Coordinates,
  CurrentlySelectedCell,
  SubGridCoordinates,
  zeroToEight,
  zeroToTwo,
} from '../models/sudoku.types';
import { SudokuService } from '../sudoku.service';

@Component({
  selector: 'app-cell',
  template: ` {{ cell }} `,
  styles: [
    `
      :host {
        /* display: inline-block; */
        &.blue-highlight {
          background-color: lightblue;
        }
        &.light-gray-highlight {
          background-color: #f0f0f0;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnChanges, OnInit {
  subGridRowNo: zeroToTwo = 0;

  subGridColNo: zeroToTwo = 0;

  @Input() cell: Cell = null;

  @Input() rowNo: zeroToEight = 0;

  @Input() colNo: zeroToEight = 0;

  @Input() currentlySelected: CurrentlySelectedCell | null = {
    number: null,
    coordinates: { colNo: null, rowNo: null },
    subGridCoordinates: {
      rowNo: null,
      colNo: null,
    },
  };

  @HostListener('click') onClick() {
    this.sudokuService.onCellSelect({
      number: this.cell,
      coordinates: { rowNo: this.rowNo, colNo: this.colNo },
      subGridCoordinates: {
        rowNo: this.subGridRowNo,
        colNo: this.subGridColNo,
      },
    });
  }

  @HostBinding('class.blue-highlight')
  blueHighlight = false;

  @HostBinding('class.light-gray-highlight')
  lightGrayHighlight = false;

  ngOnChanges(changes: SimpleChanges) {
    this._handleHighlight(changes);
  }

  ngOnInit() {
    this._setSubGridCoordinates();
  }

  constructor(private sudokuService: SudokuService) {}

  private _handleHighlight(changes: SimpleChanges) {
    const selectedCoordinates: Coordinates =
      changes['currentlySelected'].currentValue.coordinates;
    const selectedSubGridCoordinates: SubGridCoordinates =
      changes['currentlySelected'].currentValue.subGridCoordinates;

    const isSameAsSelected =
      selectedCoordinates.rowNo === this.rowNo &&
      selectedCoordinates.colNo === this.colNo;

    const isInSameRowColSubGridAsSelected =
      selectedCoordinates.rowNo === this.rowNo ||
      selectedCoordinates.colNo === this.colNo ||
      (selectedSubGridCoordinates.rowNo === this.subGridRowNo &&
        selectedSubGridCoordinates.colNo === this.subGridColNo);

    if (isSameAsSelected) {
      this.blueHighlight = true;
      this.lightGrayHighlight = false;
    } else if (isInSameRowColSubGridAsSelected) {
      this.blueHighlight = false;
      this.lightGrayHighlight = true;
    } else {
      this.blueHighlight = false;
      this.lightGrayHighlight = false;
    }
  }

  private _setSubGridCoordinates() {
    if (this.rowNo === 0 || this.rowNo === 1 || this.rowNo === 2) {
      this.subGridRowNo = 0;
    } else if (this.rowNo === 3 || this.rowNo === 4 || this.rowNo === 5) {
      this.subGridRowNo = 1;
    } else if (this.rowNo === 6 || this.rowNo === 7 || this.rowNo === 8) {
      this.subGridRowNo = 2;
    }

    if (this.colNo === 0 || this.colNo === 1 || this.colNo === 2) {
      this.subGridColNo = 0;
    } else if (this.colNo === 3 || this.colNo === 4 || this.colNo === 5) {
      this.subGridColNo = 1;
    } else if (this.colNo === 6 || this.colNo === 7 || this.colNo === 8) {
      this.subGridColNo = 2;
    }
  }
}
