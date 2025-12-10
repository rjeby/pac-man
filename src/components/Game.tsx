import { useEffect, useRef, useState } from "react";
import { INITIAL_GAME_STATE, INITIAL_GRID } from "../constants";
import type { cleanupInfo, Direction, GameState } from "../types";
import { updateCoins, updateHasWon, updateIsGameOver, updateMonsters, updatePlayer } from "../utils";
import Grid from "./Grid";
import PacMan from "./PacMan";
import Monster from "./Monster";
import GameMenu from "./GameMenu";
import GameOver from "./GameOver";
import Coin from "./Coin";
import GameSidebar from "./GameSidebar";
import Victory from "./Victory";

const Game = () => {
  const [game, handlePlayGame, handlePlayAgain] = useGame();
  return (
    <div className="flex flex-1 items-center justify-center">
      {!game.hasGameStarted && !game.isGameOver && !game.hasWon && <GameMenu onPlayGame={handlePlayGame} />}
      {game.hasGameStarted && !game.isGameOver && !game.hasWon && (
        <div className="flex flex-col items-center justify-center gap-8">
          <GameSidebar score={game.score} />

          <div className="relative">
            <Grid />
            <PacMan player={game.player} />
            {game.monsters.map((monster, index) => (
              <Monster key={index} monster={monster} />
            ))}
            {game.coins.map((coin) => (
              <Coin key={`${coin.position.row}#${coin.position.column}`} coin={coin} />
            ))}
          </div>
        </div>
      )}
      {game.hasWon && !game.isGameOver && <Victory onPlayAgain={handlePlayAgain} />}
      {game.isGameOver && !game.hasWon && <GameOver onPlayAgain={handlePlayAgain} />}
    </div>
  );
};

// Custom Hook

const useGame = (): [GameState, () => void, () => void] => {
  const [game, setGame] = useState<GameState>(INITIAL_GAME_STATE);
  const cleanupRef = useRef<cleanupInfo>({
    intervalID: -1,
    handleKeyPress: (event) => event,
  });

  useEffect(() => {
    if (game.isGameOver || game.hasWon) {
      window.removeEventListener("keydown", cleanupRef.current.handleKeyPress);
      clearInterval(cleanupRef.current.intervalID);
    }
  }, [game]);

  const handleKeyPress = (key: string) => {
    const directions = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    if (directions.includes(key)) {
      const direction = key.toLocaleLowerCase().substring(5) as Direction;
      setGame((gm) => {
        const player = updatePlayer(gm.player, direction, INITIAL_GRID);
        const isGameOver = updateIsGameOver(gm.monsters, player);
        const [points, coins] = updateCoins(gm.coins, player);
        const hasWon = updateHasWon(coins);
        return {
          ...gm,
          player: player,
          isGameOver: isGameOver,
          hasWon: hasWon,
          coins: coins,
          score: gm.score + points,
        };
      });
    }
  };

  const handlePlayGame = () => {
    const intervalID = setInterval(() => {
      setGame((gm) => {
        const monsters = updateMonsters(gm.monsters, gm.player);
        const isGameOver = updateIsGameOver(monsters, gm.player);

        return {
          ...gm,
          monsters: monsters,
          isGameOver: isGameOver,
        };
      });
    }, 1000);
    const keyDownHandler = (event: KeyboardEvent) => handleKeyPress(event.key);
    setGame((gm) => ({ ...gm, hasGameStarted: true }));
    window.addEventListener("keydown", keyDownHandler);
    cleanupRef.current.intervalID = intervalID;
    cleanupRef.current.handleKeyPress = keyDownHandler;
  };

  const handlePlayAgain = () => {
    setGame(() => INITIAL_GAME_STATE);
  };

  return [game, handlePlayGame, handlePlayAgain];
};

export default Game;
