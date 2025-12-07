import { CELL_SIZE, MONSTER_COLOR, MONSTER_SIZE } from "../constants";
import type { MonsterProps } from "../types";
import "../styles/monster.css";

const Monster = ({ position, type }: MonsterProps) => {
  const EYE_SIZE = MONSTER_SIZE * 0.125;
  const color = MONSTER_COLOR[type];
  const offset = CELL_SIZE / 2;
  const x = CELL_SIZE * position.column + offset;
  const y = CELL_SIZE * position.row + offset;

  return (
    <div
      className="monster absolute -translate-1/2 rounded-tl-full rounded-tr-full"
      style={{ left: x, top: y, width: `${MONSTER_SIZE}px`, height: `${MONSTER_SIZE}px`, backgroundColor: color }}
    >
      <div
        className="absolute top-1/3 left-1/4 -translate-1/2 rounded-full bg-white"
        style={{ width: EYE_SIZE, height: EYE_SIZE }}
      ></div>
      <div
        className="absolute top-1/3 left-3/4 -translate-1/2 rounded-full bg-white"
        style={{ width: EYE_SIZE, height: EYE_SIZE }}
      ></div>
    </div>
  );
};

export default Monster;
