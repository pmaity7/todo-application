import styled from "styled-components";

const StyledTasks = styled.div`
  border: 2px solid black;
  background-color: ${(props) =>
    props.variant === "green" ? "lightgreen" : "pink"};
  display: flex;
  justify-content: space-around;
  border-radius: 0.5em;
  margin: 0.5em;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  float: ${(props) => (props.variant === "green" ? "right" : "left")};
  background-color: ${(props) =>
    props.variant === "green" ? "forestgreen" : "crimson"};
  text-align: center;
  margin: 2%;
  padding: 2%;
  border-radius: 0.5em;
  &:hover {
    background-color: ${(props) =>
      props.variant === "green" ? "darkgreen" : "darkred"};
  }
`;

export { StyledContainer, StyledTasks };
