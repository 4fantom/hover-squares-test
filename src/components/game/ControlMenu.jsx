import { Button } from "@mui/material";
import SelectField from "../helpers/SelectField";
import { ControlMenuContainer } from "./styledComponents";

const ControlMenu = ({
  onModeChange,
  mode,
  modeItems,
  isStarted,
  handleStart,
  handleRestart,
}) => {
  return (
    <ControlMenuContainer>
      <SelectField
        handleChange={onModeChange}
        value={mode}
        label="Pick mode"
        menuItems={modeItems}
        name="pick_mode"
      />

      {!isStarted && (
        <Button variant="contained" disabled={!mode} onClick={handleStart}>
          Start
        </Button>
      )}

      {isStarted && (
        <Button variant="contained" onClick={handleRestart}>
          Restart
        </Button>
      )}
    </ControlMenuContainer>
  );
};

export default ControlMenu;
