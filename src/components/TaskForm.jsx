import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { TaskList } from "./TaskList";
import { Count } from "./Count"

import { FaRegTrashAlt, FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import {
  FormContainer,
  StyledForm,
  FormLabel,
  FormInput,
  AddButton,
  IconWrapper,
  StyledFunctionButton,
  ButtonRow,
} from './TaskForm.styles.jsx';

export const TaskForm = () => {
  const [taskValue, setTaskValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);
  const completeAllTasks = useTaskStore((state) => state.completeAllTasks);
  const uncompleteAllTasks = useTaskStore((state) => state.uncompleteAllTasks);
  const removeAllTasks = useTaskStore((state) => state.removeAllTasks);

  const tasks = useTaskStore((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim()) {
      addTask(taskValue);
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
        <FormLabel htmlFor="new-task"></FormLabel>
        <FormInput
          type="text"
          id="new-task"
          name="newTask"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          placeholder="Add new task"
          required
        />
        <AddButton type="submit" title="Add task">
          <IconWrapper>+</IconWrapper>
        </AddButton>
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
            {allTasksCompleted ? 'Unmark all' : 'Mark all as completed'}
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