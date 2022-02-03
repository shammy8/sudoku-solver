export type Sudoku = [Row, Row, Row, Row, Row, Row, Row, Row, Row];

export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

export type Cell = oneToNine | Candidates | null;

export type Candidates = oneToNine[];

export type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type zeroToEight = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Coordinates {
  rowNo: zeroToEight | null;
  colNo: zeroToEight | null;
}
