export const SINGLE_LINE = [
  // Horizontal
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  // Vertical
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  // Diagonal
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

export const BLACKOUT = [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9,
  10, 11, 12, 13, 14,
  15, 16, 17, 18, 19,
  20, 21, 22, 23, 24,
];

export const FOUR_CORNERS = [0, 4, 20, 24];


export const X_PATTERN = [0, 4, 6, 8, 12, 16, 18, 20, 24];

export const PLUS_PATTERN = [2, 7, 12, 17, 22, 10, 11, 13, 14];

export enum WIN_PATTERNS {
  SINGLE_LINE = 'SINGLE_LINE',
  BLACKOUT = 'BLACKOUT',
  FOUR_CORNERS = 'FOUR_CORNERS',
  X_PATTERN = 'X_PATTERN',
  PLUS_PATTERN = 'PLUS_PATTERN',
};
