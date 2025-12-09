export type CellType = "blocked" | "open";

export type MonsterType = "red" | "pink" | "cyan" | "orange" | "green";

export type Direction = "up" | "right" | "down" | "left";

export type GridType = CellType[][];

export interface Coin {
  position: Position;
}

export interface Player {
  position: Position;
  direction: Direction;
}

export interface Monster {
  position: Position;
  type: MonsterType;
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
  monster: Monster;
}

export interface CoinProps {
  coin: Coin;
}

export interface GameSidebarProps {
  score: number;
}

export interface GameMenuProps {
  onPlayGame: () => void;
}

export interface GameOverProps {
  onPlayAgain: () => void;
}

export interface cleanupInfo {
  intervalID: number;
  handleKeyPress: (event: KeyboardEvent) => void;
}

export interface GameState {
  player: Player;
  monsters: Monster[];
  coins: Coin[];
  score: number;
  isGameOver: boolean;
  hasGameStarted: boolean;
}
