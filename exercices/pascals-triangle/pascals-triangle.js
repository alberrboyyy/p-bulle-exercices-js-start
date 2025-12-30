//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < i + 1; j++) {
      const prevRow = triangle[i - 1] ?? [];

      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push((prevRow[j - 1] ?? 0) + (prevRow[j] ?? 0));
      }
    }
    triangle.push(row);
  }

  return triangle;
};
