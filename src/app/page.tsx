'use client';

import { useEffect, useState } from "react";
import { bingoData } from "./bingoData";
import { BingoCell } from "./types";
import { createBingoGrid, checkWin } from "./utils";
import { winningLines } from "./constants";
import { triggerConfetti } from "./confettiUtils";
import BingoGrid from "./components/BingoGrid";

export default function Home() {
  const [grid, setGrid] = useState<BingoCell[]>([]);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const initialGrid = createBingoGrid(bingoData);
    setGrid(initialGrid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCellClick = (id: number) => {
    setGrid(prevGrid =>
      prevGrid.map(cell =>
        cell.id === id && !cell.isFreeSpace
          ? { ...cell, selected: !cell.selected }
          : cell
      )
    );
  };

  const generateNewCard = () => {
    setHasWon(false);
    const newGrid = createBingoGrid(bingoData);
    setGrid(newGrid);
  };

  useEffect(() => {
    if (grid.length > 0 && checkWin(grid, winningLines) && !hasWon) {
      setHasWon(true);
      triggerConfetti();
    }
  }, [grid, hasWon]);

  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-6 relative z-10">
        <div className="text-center space-y-3">
          <h1 className="text-6xl md:text-7xl font-black text-white drop-shadow-2xl tracking-tight">
            <span className="bg-linear-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Meeting Bingo
            </span>
          </h1>
          <p className="text-white/90 text-xl font-medium drop-shadow-lg">
            🎯 Click the phrases you hear in your meeting!
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={generateNewCard}
            className="px-8 py-4 bg-linear-to-r from-yellow-400 via-pink-400 to-purple-400 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 hover:rotate-3"
          >
            🎲 New Card
          </button>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/30">
          <BingoGrid grid={grid} onCellClick={handleCellClick} />
        </div>

        <div className="text-center">
          <p className="text-white/80 text-sm font-medium">
            Get 5 in a row (horizontal, vertical, or diagonal) to win! 🏆
          </p>
        </div>
      </div>

      {hasWon &&
        <div className="top-0 left-0 fixed h-screen w-screen bg-linear-to-br from-yellow-500/95 via-pink-500/95 to-purple-600/95 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-8 animate-in fade-in duration-500">
          <div className="text-center space-y-6 animate-in zoom-in duration-700">
            <h2 className="text-8xl md:text-9xl font-black text-white drop-shadow-2xl animate-pulse">
              🎉 BINGO! 🎉
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white/95 drop-shadow-lg">
              You're a Meeting Buzzword Champion!
            </p>
            <div className="flex gap-4 justify-center text-5xl animate-bounce">
              🏆 🎊 ⭐
            </div>
          </div>
          <button
            className="px-10 py-5 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl font-black text-2xl shadow-2xl hover:shadow-3xl hover:scale-125 transition-all duration-300 border-4 border-white/50"
            onClick={generateNewCard}
          >
            🎲 Play Again!
          </button>
        </div>
      }
    </main>
  );
}
