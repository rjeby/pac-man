import type { GameMenuProps } from "../types";

const GameMenu = ({ onPlayGame }: GameMenuProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex w-xl flex-col items-center rounded-2xl border-4 border-yellow-400 py-8">
        <span className="text-8xl font-bold drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
          <span className="text-yellow-400">P</span>
          <span className="text-yellow-400">A</span>
          <span className="text-yellow-400">C</span>
          <span className="text-red-500">-</span>
          <span className="text-red-500">M</span>
          <span className="text-pink-400">A</span>
          <span className="text-cyan-400">N</span>
        </span>

        <div className="mt-4 mb-16 flex w-2xs flex-col text-yellow-400">
          <span className="flex justify-center gap-1">
            <span className="font-semibold text-gray-400">Arrow Up:</span>
            <span>Move Up</span>
          </span>

          <div className="flex justify-between">
            <span className="flex gap-1">
              <span className="font-semibold text-gray-400">Arrow Left:</span>
              <span>Move Left</span>
            </span>
            <span className="flex gap-1">
              <span className="font-semibold text-gray-400">Arrow Right:</span>
              <span>Move Right</span>
            </span>
          </div>

          <span className="flex justify-center gap-1">
            <span className="font-semibold text-gray-400">Arrow Down:</span>
            <span>Move Down</span>
          </span>
        </div>

        <button
          type="button"
          onClick={onPlayGame}
          className="animate-pulse rounded-2xl bg-yellow-400 px-8 py-2 text-4xl text-black shadow-[0_0_15px_rgba(255,255,0,0.9)] hover:scale-125"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default GameMenu;
