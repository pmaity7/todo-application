import React from "react";
import { StyledContainer, StyledTasks } from "../themes/completedTasks.style";
import { StyledButton } from "../themes/button.style";

function CompletedTasks({ completedTasks, shiftToCompleted, deleteHandler }) {
  const onDrop = (e) => {
    let id = e.dataTransfer.getData("text");
    shiftToCompleted(id);
  };

  const onDragFunc = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const deleteTask = (e) => {
    deleteHandler(e.target.id, "C");
  };

  return (
    <StyledContainer
      onDragOver={(e) => e.preventDefault()}
      style={{ border: "2px solid black" }}
      onDrop={(e) => onDrop(e)}
      className="droppable-div"
    >
      {completedTasks.map((task) => {
        return (
          <StyledTasks
            key={task.id}
            id={task.id}
            draggable
            className="draggable-div"
            onDragStart={(e) => onDragFunc(e)}
          >
            <h3>{task.desc}</h3>
            {/* <button>Delete</button> */}
            <StyledButton id={task.id} onClick={deleteTask}>
              Delete
            </StyledButton>
          </StyledTasks>
        );
      })}
    </StyledContainer>
  );
}

export default CompletedTasks;
