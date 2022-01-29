import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import PendingTasks from "./components/PendingTasks";
import uniqid from "uniqid";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [completedTasks, setCompletedTasks] = useState([
    {
      id: uniqid(),
      desc: "Do Laundry",
    },
    {
      id: uniqid(),
      desc: "Call friend",
    },
  ]);

  const [pendingTasks, setPendingTasks] = useState([
    {
      id: uniqid(),
      desc: "Cook Dinner",
    },
    {
      id: uniqid(),
      desc: "BedTime Story",
    },
  ]);

  const getAddedTask = (task) => {
    console.log("task" + task);
    setPendingTasks((prevState) => {
      return [...prevState, { id: uniqid(), desc: task }];
    });
  };

  const shiftToPending = (id) => {
    console.log("shiftToPending " + id);
    const [tasks] = completedTasks.filter((task) => task.id === id);
    const ctasks = completedTasks.filter((task) => task.id !== id);
    setPendingTasks((prevState) => [tasks, ...prevState]);
    setCompletedTasks(ctasks);
  };
  const shiftToCompleted = (id) => {
    console.log("shiftToCompleted " + id);
    const [tasks] = pendingTasks.filter((task) => task.id === id);
    const ptasks = pendingTasks.filter((task) => task.id !== id);
    setCompletedTasks((prevState) => [tasks, ...prevState]);
    setPendingTasks(ptasks);
  };

  const deleteHandler = (id, type) => {
    if (type === "P") {
      const remainingTasks = pendingTasks.filter((task) => task.id !== id);
      setPendingTasks(remainingTasks);
    } else {
      const remainingTasks = completedTasks.filter((task) => task.id !== id);
      setCompletedTasks(remainingTasks);
    }
  };

  return (
    <div>
      <AddTasks getAddedTask={getAddedTask} />
      <PendingTasks
        pendingTasks={pendingTasks}
        shiftToPending={shiftToPending}
        deleteHandler={deleteHandler}
      />
      <CompletedTasks
        completedTasks={completedTasks}
        shiftToCompleted={shiftToCompleted}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
