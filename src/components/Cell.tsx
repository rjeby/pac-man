import { CELL_SIZE } from "../constants";
import type { CellProps } from "../types";

const Cell = ({ type }: CellProps) => {
  const bgColor = type === "blocked" ? "#A0C4FF" : "#FDF7E4";
  return <div style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`, backgroundColor: bgColor }}></div>;
};

export default Cell;
