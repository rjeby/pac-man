import { useState } from "react";
import { CELL_SIZE, COLS, INITIAL_GRID, ROWS } from "../constants";
import Cell from "./Cell";

const Grid = () => {
  const [grid, setGrid] = useState(INITIAL_GRID);
  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
        gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
      }}
    >
      {grid.map((row, rowIndex) => row.map((type, columIndex) => <Cell key={`${rowIndex}#${columIndex}`} type={type} />))}
    </div>
  );
};

export default Grid;
