var rotate = function (matrix) {
  matrix.reverse();
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < y; x++) {
      let temp = matrix[y][x];
      console.log(temp);
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }
  console.log(matrix);
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);
