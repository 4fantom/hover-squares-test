import { useMemo } from "react";
import { SquareDiv } from "./styledComponents";

const Square = ({ row, column, switchHover, squares }) => {
  const isSelected = useMemo(
    () => squares[row]?.[column],
    [squares, column, row]
  );

  const handleMouseEnter = () => {
    switchHover(row, column, !isSelected);
  };

  return (
    <div>
      <SquareDiv
        isSelected={isSelected}
        onMouseOver={handleMouseEnter}
        key={"square-" + row + column}
      />
    </div>
  );
};
export default Square;
