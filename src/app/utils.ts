import { BingoCell } from './types';

export const shufflePhrases = (array: string[]): string[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const createBingoGrid = (phrases: string[]): BingoCell[] => {
  const shuffled = shufflePhrases(phrases);
  const selected24 = shuffled.slice(0, 24);

  const grid: BingoCell[] = [];
  let phraseIndex = 0;

  for (let i = 0; i < 25; i++) {
    if (i === 12) {
      // Center cell (index 12) is the free space
      grid.push({
        id: i,
        phrase: "FREE SPACE",
        selected: true,
        isFreeSpace: true
      });
    } else {
      grid.push({
        id: i,
        phrase: selected24[phraseIndex],
        selected: false,
        isFreeSpace: false
      });
      phraseIndex++;
    }
  }

  return grid;
}

export const checkWin = (grid: BingoCell[], winningLines: number[][]): boolean => {
  for (const line of winningLines) {
    if (line.every(index => grid[index]?.selected)) {
      return true;
    }
  }
  return false;
}
