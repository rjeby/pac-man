import type { Direction, GridType, Player } from "./types";

export const updatePlayerPosition = (player: Player, direction: Direction, grid: GridType) => {
  const dc = direction === "right" ? 1 : direction === "left" ? -1 : 0;
  const dr = direction === "down" ? 1 : direction === "up" ? -1 : 0;
  console.log(direction, "###", dc, "###", dr);
  const position = { row: player.position.row + dr, column: player.position.column + dc };
  if (
    position.row < 0 ||
    position.column < 0 ||
    position.row >= grid.length ||
    position.column >= grid[0].length ||
    grid[position.row][position.column] === "blocked"
  ) {
    console.log(position, "###", player.position, "###", direction, "zzz", grid.length, "xxx", grid[0].length );

    return player.position;
  }

  console.log(position, "###", player.position, "###", direction);
  return position;
};
