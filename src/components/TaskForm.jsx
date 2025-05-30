import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { TaskList } from "./TaskList";
import { Count } from "./Count"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { FaRegTrashAlt, FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import {
  FormContainer,
  StyledForm,
  FormLabel,
  FormInput,
  AddButton,
  IconWrapper,
  StyledFunctionButton,
  ButtonRow,
  FormRow
} from "./TaskForm.styles.jsx";

export const TaskForm = () => {
  const [taskValue, setTaskValue] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const addTask = useTaskStore((state) => state.addTask);
  const completeAllTasks = useTaskStore((state) => state.completeAllTasks);
  const uncompleteAllTasks = useTaskStore((state) => state.uncompleteAllTasks);
  const removeAllTasks = useTaskStore((state) => state.removeAllTasks);

  const tasks = useTaskStore((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim()) {
      const dueDateString = dueDate ? dueDate.toISOString() : null;
      addTask(taskValue, dueDateString);
      setTaskValue("");
    }
  };

  const handleToggleCompleteAll = () => {
    const hasIncomplete = tasks.some(task => !task.isCompleted);

    if (hasIncomplete) {
      completeAllTasks();
    } else {
      uncompleteAllTasks();
    }
  };

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all tasks? This action cannot be undone.")) {
      removeAllTasks();
    }
  };

  const allTasksCompleted = tasks.every(task => task.isCompleted);
  const hasAnyTasks = tasks.length > 0;

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="new-task" className="visually-hidden">
          Task input
        </FormLabel>

        <FormRow>
          <FormInput
            type="text"
            id="new-task"
            name="newTask"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            placeholder="Add new task"
            required
          />

          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Due date"
            dateFormat="yyyy-MM-dd"
            className="date-picker-input"
          />
          <AddButton type="submit" title="Add task">
            <IconWrapper>+</IconWrapper>
          </AddButton>
        </FormRow>
      </StyledForm>
      <Count />

      <TaskList />

      {hasAnyTasks && (
        <ButtonRow>
          <StyledFunctionButton
            $type="complete"
            onClick={handleToggleCompleteAll}
          >
            <IconWrapper>
              {allTasksCompleted ? (
                <FaRegCheckCircle />
              ) : (
                <FaCheckCircle />
              )}
            </IconWrapper>
            {allTasksCompleted ? "Unmark all" : "Complete all"}
          </StyledFunctionButton>

          {tasks.length > 0 && (
            <StyledFunctionButton $type="delete" onClick={handleDeleteAll} title="Delete all tasks">
              <IconWrapper><FaRegTrashAlt /></IconWrapper> Delete all
            </StyledFunctionButton>
          )}
        </ButtonRow>
      )}
    </FormContainer>
  );
};