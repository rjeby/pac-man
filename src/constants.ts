import type { CellType } from "./types";

export const ROWS = 10;
export const COLS = 20;
export const PACMAN_SIZE = 48;
export const CELL_SIZE = 64;
export const INITIAL_GRID: CellType[][] = [
  ["blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked"],
  ["blocked", "open", "open", "open", "blocked", "open", "open", "open", "open", "blocked", "blocked", "open", "open", "open", "open", "blocked", "open", "open", "open", "blocked"],
  ["blocked", "open", "blocked", "open", "blocked", "open", "blocked", "open", "open", "open", "open", "open", "open", "blocked", "open", "blocked", "open", "blocked", "open", "blocked"],
  ["blocked", "open", "open", "open", "open", "open", "open", "blocked", "open", "blocked", "blocked", "open", "blocked", "open", "open", "open", "open", "open", "open", "blocked"],
  ["blocked", "open", "blocked", "blocked", "blocked", "open", "open", "blocked", "open", "open", "open", "open", "blocked", "open", "open", "blocked", "blocked", "blocked", "open", "blocked"],
  ["blocked", "open", "blocked", "blocked", "blocked", "open", "open", "blocked", "open", "open", "open", "open", "blocked", "open", "open", "blocked", "blocked", "blocked", "open", "blocked"],
  ["blocked", "open", "open", "open", "open", "open", "open", "blocked", "open", "blocked", "blocked", "open", "blocked", "open", "open", "open", "open", "open", "open", "blocked"],
  ["blocked", "open", "blocked", "open", "blocked", "open", "blocked", "open", "open", "open", "open", "open", "open", "blocked", "open", "blocked", "open", "blocked", "open", "blocked"],
  ["blocked", "open", "open", "open", "blocked", "open", "open", "open", "open", "blocked", "blocked", "open", "open", "open", "open", "blocked", "open", "open", "open", "blocked"],
  ["blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked", "blocked"],
];
