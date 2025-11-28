import { BingoCell } from '../types';

type BingoGridProps = {
  grid: BingoCell[];
  onCellClick: (id: number) => void;
}

export default function BingoGrid({ grid, onCellClick }: BingoGridProps) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {grid.map(cell => (
        <div
          key={cell.id}
          onClick={() => onCellClick(cell.id)}
          className={`p-4 cursor-pointer bingo-cell ${cell.selected ? 'selected' : ''} ${cell.isFreeSpace ? 'free-space' : ''} h-32 text-center flex items-center justify-center`}
        >
          {cell.phrase}
        </div>
      ))}
    </div>
  );
}
