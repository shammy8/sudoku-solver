import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { IsCandidatesPipe } from './is-candidate.pipe';

@NgModule({
  declarations: [AppComponent, RowComponent, CellComponent, CandidatesComponent, IsCandidatesPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
