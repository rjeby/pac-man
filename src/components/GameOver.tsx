import type { GameOverProps } from "../types";

const GameOver = ({ onPlayAgain }: GameOverProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16 rounded-2xl border-4 border-yellow-400 p-16">
        <span className="text-9xl font-bold drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
          <span className="text-yellow-400">G</span>
          <span className="text-yellow-400">A</span>
          <span className="text-yellow-400">M</span>
          <span className="mr-8 text-yellow-400">E</span>
          <span className="text-red-500">O</span>
          <span className="text-red-500">V</span>
          <span className="text-pink-400">E</span>
          <span className="text-cyan-400">R</span>
        </span>
        <button
          type="button"
          onClick={onPlayAgain}
          className="animate-pulse rounded-2xl bg-yellow-400 px-8 py-2 text-4xl text-black shadow-[0_0_15px_rgba(255,255,0,0.9)] hover:scale-125"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
