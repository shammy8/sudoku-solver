export type Sudoku = [Row, Row, Row, Row, Row, Row, Row, Row, Row];

export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

export type Cell = oneToNine | Candidates | null;

export interface Candidates {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
  6: boolean;
  7: boolean;
  8: boolean;
  9: boolean;
}

export type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type zeroToEight = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type zeroToTwo = 0 | 1 | 2;

export interface CurrentlySelectedCell {
  number: Cell;
  coordinates: Coordinates;
  subGridCoordinates: SubGridCoordinates;
}

export interface Coordinates {
  rowNo: zeroToEight | null;
  colNo: zeroToEight | null;
}

export interface SubGridCoordinates {
  rowNo: zeroToTwo | null;
  colNo: zeroToTwo | null;
}
