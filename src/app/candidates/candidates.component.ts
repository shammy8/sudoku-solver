import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Candidates } from '../models/sudoku.types';

@Component({
  selector: 'app-candidates',
  template: `<div *ngFor="let candidate of candidates | keyvalue">
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
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatesComponent {
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
}
