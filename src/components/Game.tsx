import Grid from "./Grid";
import PacMan from "./PacMan";

const Game = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <Grid />
        <PacMan position={{ row: 0, column: 0 }} />
      </div>
    </div>
  );
};

export default Game;
