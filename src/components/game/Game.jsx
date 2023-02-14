import React, { useMemo, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import useFetch from "../helpers/useFetch";
import Field from "./field";
import InfoBoard from "./InfoBoard";
import ControlMenu from "./ControlMenu";

const Game = () => {
  const [mode, setMode] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [squares, setSquares] = useState({});

  const { data, loading, error } = useFetch("/");

  const modeItems = useMemo(
    () =>
      data?.map((mode) => ({
        value: mode.name,
        label: mode.name,
      })),
    [data]
  );

  const modeDetails = useMemo(
    () => data?.find((el) => el.name === mode),
    [mode, data]
  );

  const onModeChange = (e) => {
    setSquares({});
    setMode(e.target.value);
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleRestart = () => {
    setSquares({});
  };

  const switchHover = (row, column, isHover) => {
    setSquares((prev) => {
      return {
        ...prev,
        [row]: {
          ...prev[row],
          [column]: isHover,
        },
      };
    });
  };

  return (
    <>
      {error && <Typography> {`Oops, ${error}`}</Typography>}
      {loading && <CircularProgress />}
      {data && (
        <>
          <ControlMenu
            onModeChange={onModeChange}
            mode={mode}
            modeItems={modeItems}
            isStarted={isStarted}
            handleStart={handleStart}
            handleRestart={handleRestart}
          />

          {isStarted && (
            <Box sx={{ display: "flex" }}>
              <Field
                mode={modeDetails}
                switchHover={switchHover}
                squares={squares}
              />
              <InfoBoard squares={squares} />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Game;
