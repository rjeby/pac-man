export type CellType = "blocked" | "open";

export interface Position {
  row: number;
  column: number;
}

export interface CellProps {
  type: CellType;
}

export interface PacManProps {
  position: Position;
}
