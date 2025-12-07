import { CELL_SIZE, PACMAN_SIZE } from "../constants";
import type { PacManProps } from "../types";
import "../styles/pacman.css";

const PacMan = ({ player }: PacManProps) => {
  const position = player.position;
  const direction = `pacman-${player.direction}`;
  const offset = CELL_SIZE / 2;
  const x = CELL_SIZE * position.column + offset;
  const y = CELL_SIZE * position.row + offset;
  return (
    <div
      className={`${direction} absolute -translate-1/2 rounded-full bg-yellow-300`}
      style={{ width: `${PACMAN_SIZE}px`, height: `${PACMAN_SIZE}px`, left: x, top: y }}
    ></div>
  );
};

export default PacMan;
