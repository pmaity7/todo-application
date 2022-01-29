import React from "react";
import { StyledContainer, StyledTasks } from "../themes/pendingTasks.style";
import { StyledButton } from "../themes/button.style";

function PendingTasks({ pendingTasks, shiftToPending, deleteHandler }) {
  const onDrop = (e) => {
    let id = e.dataTransfer.getData("text");
    shiftToPending(id);
  };

  const onDragFunc = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const deleteTask = (e) => {
    deleteHandler(e.target.id, "P");
  };

  return (
    <StyledContainer
      className="droppable-div"
      onDragOver={(e) => e.preventDefault()}
      style={{ border: "2px solid black" }}
      onDrop={(e) => onDrop(e)}
    >
      {pendingTasks.map((task) => {
        return (
          <StyledTasks
            id={task.id}
            key={task.id}
            draggable
            className="draggable-div"
            onDragStart={(e) => onDragFunc(e)}
          >
            <h3>{task.desc}</h3>
            <StyledButton id={task.id} onClick={deleteTask}>
              Delete
            </StyledButton>
          </StyledTasks>
        );
      })}
    </StyledContainer>
  );
}

export default PendingTasks;
