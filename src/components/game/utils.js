export const getHoverSquares = (squares) => {
  const hoveredSquares = [];

  for (const [row, columns] of Object.entries(squares)) {
    for (const [column, isHovered] of Object.entries(columns)) {
      if (isHovered) {
        hoveredSquares.push({
          row: row,
          column: column,
        });
      }
    }
  }
  return hoveredSquares;
};
