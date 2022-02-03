import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [AppComponent, RowComponent, CellComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
