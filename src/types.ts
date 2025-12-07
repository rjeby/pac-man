export type CellType = "blocked" | "open";

export type MonsterType = "red" | "pink" | "cyan" | "orange" | "green";

export type Direction = "up" | "right" | "down" | "left";

export type GridType = CellType[][];

export interface Player {
  position: Position;
  direction: Direction;
}

export interface Position {
  row: number;
  column: number;
}

export interface CellProps {
  type: CellType;
}

export interface PacManProps {
  player: Player;
}

export interface MonsterProps {
  position: Position;
  type: MonsterType;
}

export interface GameState {
  player: Player;
}
