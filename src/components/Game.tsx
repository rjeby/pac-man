import { useEffect, useState } from "react";
import { INITIAL_GAME_STATE, INITIAL_GRID } from "../constants";
import type { Direction, GameState } from "../types";
import { updatePlayerPosition } from "../utils";
import Grid from "./Grid";
import PacMan from "./PacMan";

const Game = () => {
  const [game, setGame] = useState<GameState>(INITIAL_GAME_STATE);

  useEffect(() => {
    const handleKeyPress = (key: string) => {
      const directions = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
      if (directions.includes(key)) {
        const direction = key.toLocaleLowerCase().substring(5) as Direction;
        setGame((gm) => {
          return {
            ...gm,
            player: {
              position: updatePlayerPosition(gm.player, direction, INITIAL_GRID),
              direction: direction,
            },
          };
        });
      }
    };
    const keyDownHandler = (event: KeyboardEvent) => handleKeyPress(event.key);
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <Grid />
        <PacMan player={game.player} />
      </div>
    </div>
  );
};

export default Game;
