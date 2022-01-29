import React, { useState } from "react";
import styled from "styled-components";
import { StyledError } from "../themes/error.style";
import { StyledForm } from "../themes/form.style";
import { StyledButton } from "../themes/button.style";

const StyledInput = styled.input`
  width: 70%;
  height: 2em;
  border-radius: 3px;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;
`;

function AddTasks({ getAddedTask }) {
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.name.value !== "") {
      getAddedTask(e.target.name.value);
      setError("");
    } else {
      setError("Cannot add empty task");
    }
  };

  return (
    <>
      {error ? <StyledError>{error}</StyledError> : null}
      <StyledForm onSubmit={submitHandler}>
        <label htmlFor="task">Task Name</label>
        <StyledInput
          type="text"
          name="task"
          id="name"
          onChange={(e) => console.log(e.target.value)}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}

export default AddTasks;
