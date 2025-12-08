import { CELL_SIZE, INITIAL_GRID } from "../constants";
import Cell from "./Cell";

const Grid = () => {
  const grid = INITIAL_GRID;
  const ROWS = grid.length;
  const COLS = grid[0].length;
  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
        gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((type, columIndex) => <Cell key={`${rowIndex}#${columIndex}`} type={type} />),
      )}
    </div>
  );
};

export default Grid;
