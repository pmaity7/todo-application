import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  float: left;
  background-color: crimson;
  text-align: center;
  margin: 2%;
  padding: 2%;
  border-radius: 0.5em;
`;

const StyledTasks = styled.div`
  border: 2px solid black;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  border-radius: 0.5em;
  margin: 0.5em;
`;

export { StyledContainer, StyledTasks };
