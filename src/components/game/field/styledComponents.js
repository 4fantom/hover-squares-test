import styled from "styled-components";

export const SquareDiv = styled.div((props) => ({
  backgroundColor: props.isSelected ? "blue" : "white",
  border: "1px solid black",
  cursor: "pointer",
  aspectRatio: "1",
}));

export const FieldContainer = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${props.length}, 1fr)`,
  margin: "auto",
  width: "500px",
  marginTop: 0,
}));
