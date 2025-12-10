import type { VictoryProps } from "../types";

const Victory = ({ onPlayAgain }: VictoryProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16 rounded-2xl border-4 border-yellow-400 p-16">
        <span className="text-9xl font-bold drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
          <span className="text-yellow-400">Y</span>
          <span className="text-yellow-400">O</span>
          <span className="mr-8 text-yellow-400">U</span>
          <span className="text-cyan-500">W</span>
          <span className="text-red-500">O</span>
          <span className="text-red-500 mr-4">N</span>
          <span className="text-pink-400">!</span>
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

export default Victory;
