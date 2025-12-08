import { Queue } from "./components/queue";
import { INITIAL_GRID } from "./constants";
import type { Direction, GridType, Player, Position } from "./types";

export const updatePlayerPosition = (player: Player, direction: Direction, grid: GridType) => {
  const dc = direction === "right" ? 1 : direction === "left" ? -1 : 0;
  const dr = direction === "down" ? 1 : direction === "up" ? -1 : 0;
  const position = { row: player.position.row + dr, column: player.position.column + dc };
  if (
    position.row < 0 ||
    position.column < 0 ||
    position.row >= grid.length ||
    position.column >= grid[0].length ||
    grid[position.row][position.column] === "blocked"
  ) {
    return player.position;
  }

  return position;
};

export const djikstra = (grid: GridType) => {
  console.log("DJIKSTRA");
  const rows = grid.length;
  const columns = grid[0].length;
  const cache = new Map<string, { distance: number; path: Position[] }>();
  const bfs = (startPosition: Position) => {
    const queue: Queue<[number, Position, Position[]]> = new Queue();
    queue.push([0, startPosition, []]);
    cache.set(`${startPosition.row}#${startPosition.column}#${startPosition.row}#${startPosition.column}`, {
      distance: 0,
      path: [],
    });
    while (queue.length) {
      const count = queue.length;
      for (let i = 0; i < count; i++) {
        const [lg, nd, pt] = queue.getFront();
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const target = { row: nd.row + dr, column: nd.column + dc };
            const hash = `${startPosition.row}#${startPosition.column}#${target.row}#${target.column}`;
            if (
              (dr && dc) ||
              dr === dc ||
              target.row < 0 ||
              target.column < 0 ||
              target.row >= rows ||
              target.column >= columns ||
              (cache.has(hash) && cache.get(hash)!.distance <= lg + 1)
            ) {
              continue;
            }
            const weigth = grid[target.row][target.column] === "blocked" ? Infinity : 1;
            const path = weigth === Infinity ? [] : [...pt, target];
            const distance = lg + weigth;
            cache.set(hash, { distance: distance, path: path });
            queue.push([distance, target, path]);
          }
        }
        queue.shift();
      }
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      bfs({ row: row, column: column });
    }
  }

  return function minimumDistanceFromStartToTarget(startPosition: Position, targetPosition: Position) {
    const hash = `${startPosition.row}#${startPosition.column}#${targetPosition.row}#${targetPosition.column}`;
    if (
      !cache.get(hash) ||
      (startPosition.row === targetPosition.row && startPosition.column === targetPosition.column)
    ) {
      return startPosition;
    }

    return cache.get(hash)!.path[0];
  };
};

export const nextOptimalMove = djikstra(INITIAL_GRID);
