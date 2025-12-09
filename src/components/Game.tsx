import { useEffect, useRef, useState } from "react";
import { INITIAL_GAME_STATE, INITIAL_GRID } from "../constants";
import type { cleanupInfo, Direction, GameState } from "../types";
import { updateIsGameOver, updateMonsters, updatePlayer } from "../utils";
import Grid from "./Grid";
import PacMan from "./PacMan";
import Monster from "./Monster";
import GameMenu from "./GameMenu";
import GameOver from "./GameOver";

const Game = () => {
  const [game, setGame] = useState<GameState>(INITIAL_GAME_STATE);
  const cleanupRef = useRef<cleanupInfo>({
    intervalID: -1,
    handleKeyPress: (event) => event,
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      setGame((gm) => {
        const monsters = updateMonsters(gm.monsters, gm.player);
        const isGameOver = updateIsGameOver(monsters, gm.player);
        if (isGameOver) {
          window.removeEventListener("keydown", cleanupRef.current.handleKeyPress);
          clearInterval(cleanupRef.current.intervalID);
        }
        return {
          ...gm,
          monsters: monsters,
          isGameOver: isGameOver,
        };
      });
    }, 1000);
    const handleKeyPress = (key: string) => {
      const directions = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
      if (directions.includes(key)) {
        const direction = key.toLocaleLowerCase().substring(5) as Direction;
        setGame((gm) => {
          const player = updatePlayer(gm.player, direction, INITIAL_GRID);
          const isGameOver = updateIsGameOver(gm.monsters, player);
          if (isGameOver) {
            window.removeEventListener("keydown", cleanupRef.current.handleKeyPress);
            clearInterval(cleanupRef.current.intervalID);
          }
          return {
            ...gm,
            player: player,
            isGameOver: updateIsGameOver(gm.monsters, player),
          };
        });
      }
    };
    const keyDownHandler = (event: KeyboardEvent) => handleKeyPress(event.key);
    window.addEventListener("keydown", keyDownHandler);
    cleanupRef.current.intervalID = intervalID;
    cleanupRef.current.handleKeyPress = keyDownHandler;
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      clearInterval(intervalID);
    };
  }, []);

  const handlePlayGame = () => {
    setGame((gm) => ({ ...gm, hasGameStarted: true }));
  };

  const handlePlayAgain = () => {
    setGame(() => INITIAL_GAME_STATE);
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      {!game.hasGameStarted && !game.isGameOver && <GameMenu onPlayGame={handlePlayGame} />}

      {game.hasGameStarted && !game.isGameOver && (
        <div className="relative">
          <Grid />
          <PacMan player={game.player} />
          {game.monsters.map((monster, index) => (
            <Monster key={index} monster={monster} />
          ))}
        </div>
      )}

      {game.isGameOver && <GameOver onPlayAgain={handlePlayAgain} />}
    </div>
  );
};

export default Game;
