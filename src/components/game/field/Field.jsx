import { useMemo } from "react";
import Square from "./Square";
import { FieldContainer } from "./styledComponents";

const Field = ({ mode, switchHover, squares }) => {
  const length = mode.field;

  const boxes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        arr.push(
          <Square
            key={`box-${mode.name}-${i}-${j}`}
            row={i}
            column={j}
            switchHover={switchHover}
            squares={squares}
          />
        );
      }
    }
    return arr;
  }, [switchHover, squares, mode, length]);

  return <FieldContainer length={length}>{boxes}</FieldContainer>;
};
export default Field;
