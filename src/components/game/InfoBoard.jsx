import { useMemo } from "react";
import { Typography } from "@mui/material";

import { InfoBox, InfoContainer } from "./styledComponents";
import { getHoverSquares } from "./utils";

const InfoBoard = ({ squares }) => {
  const hoverSquares = useMemo(() => getHoverSquares(squares), [squares]);

  return (
    <InfoContainer>
      <Typography variant="h5">Hover squares</Typography>

      {hoverSquares.map(({ row, column }) => (
        <InfoBox key={`info-${row}-${column}`}>
          <Typography>
            row {+row + 1}, col {+column + 1}
          </Typography>
        </InfoBox>
      ))}
    </InfoContainer>
  );
};

export default InfoBoard;
