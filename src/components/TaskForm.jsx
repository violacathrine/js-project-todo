import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { TaskList } from "./TaskList";

export const TaskForm = () => {
  const [taskValue, setTaskValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskValue.trim()) {
      addTask(taskValue);
      setTaskValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-task">New Todo</label>
        <input
          type="text"
          id="new-task"
          name="newTask"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button type="submit">+</button>
      </form>

      <TaskList />
    </>
  );
};