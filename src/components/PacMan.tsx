import { CELL_SIZE, PACMAN_SIZE } from "../constants";
import type { PacManProps } from "../types";
import "../styles/pacman.css";

const PacMan = ({ position }: PacManProps) => {
  const offset = CELL_SIZE / 2;
  const x = CELL_SIZE * position.row + offset;
  const y = CELL_SIZE * position.column + offset;
  return (
    <div
      className="pacman absolute -translate-1/2 rounded-full bg-yellow-300"
      style={{
        width: `${PACMAN_SIZE}px`,
        height: `${PACMAN_SIZE}px`,
        left: x,
        top: y,
      }}
    ></div>
  );
};

export default PacMan;
