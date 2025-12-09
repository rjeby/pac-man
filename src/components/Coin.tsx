import { CELL_SIZE, COIN_SIZE } from "../constants";
import type { CoinProps } from "../types";
import "../styles/coin.css";

const Coin = ({ coin }: CoinProps) => {
  const position = coin.position;
  const offset = CELL_SIZE / 2;
  const x = CELL_SIZE * position.column + offset;
  const y = CELL_SIZE * position.row + offset;
  return (
    <div
      className="coin  absolute z-10 -translate-1/2 rounded-full bg-amber-300"
      style={{ left: x, top: y, width: COIN_SIZE, height: COIN_SIZE }}
    ></div>
  );
};

export default Coin;
