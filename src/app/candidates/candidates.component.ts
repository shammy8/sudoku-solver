import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Candidates, CurrentlySelectedCell } from '../models/sudoku.types';

@Component({
  selector: 'app-candidates',
  template: `<div
    *ngFor="let candidate of candidates | keyvalue"
    [class.bold]="candidate.key === currentlySelectedNumberAsString"
  >
    {{ candidate.value === true ? candidate.key : '' }}
  </div>`,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
        font-size: 10px;
        line-height: 10px;
        height: 100%;
        color: gray;
      }
      .bold {
        font-weight: bolder;
        color: black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatesComponent implements OnChanges {
  currentlySelectedNumberAsString: string | null = null;

  @Input() candidates: Candidates = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  };

  @Input() currentlySelected: CurrentlySelectedCell | null = {
    number: null,
    coordinates: { colNo: null, rowNo: null },
    subGridCoordinates: {
      rowNo: null,
      colNo: null,
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    const currentlySelected: CurrentlySelectedCell =
      changes['currentlySelected']?.currentValue;
    if (currentlySelected) {
      this.setCurrentlySelectedNumberAsString(currentlySelected);
    }
  }

  private setCurrentlySelectedNumberAsString(
    currentlySelected: CurrentlySelectedCell
  ) {
    this.currentlySelectedNumberAsString =
      typeof currentlySelected.number === 'number'
        ? currentlySelected.number.toString()
        : null;
  }
}
