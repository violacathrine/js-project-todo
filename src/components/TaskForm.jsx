
import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { TaskList } from "./TaskList";
import { SlPlus } from "react-icons/sl";
import { FaRegTrashAlt, FaCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';
import {
  FormContainer,
  StyledForm,
  FormLabel,
  FormInput,
  AddButton,
  IconWrapper,
  StyledFunctionButton,
  ButtonRow,
  ToggleListButton
} from './TaskForm.styles.jsx';

export const TaskForm = () => {
  const [taskValue, setTaskValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);
  const completeAllTasks = useTaskStore((state) => state.completeAllTasks);
  const removeAllTasks = useTaskStore((state) => state.removeAllTasks);

  const tasks = useTaskStore((state) => state.tasks);
  const showStarredOnly = useTaskStore((state) => state.showStarredOnly);
  const toggleShowStarredOnly = useTaskStore((state) => state.toggleShowStarredOnly);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim()) {
      addTask(taskValue);
      setTaskValue("");
    }
  };

  const handleCompleteAll = () => {
      completeAllTasks();
  };

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all tasks? This action cannot be undone.")) {
      removeAllTasks();
    }
  };

  const handleToggleList = () => {
    toggleShowStarredOnly();
  };

  const hasIncompleteTasks = tasks.some(task => !task.isCompleted);
  const hasAnyTasks = tasks.length > 0;

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="new-task">Task</FormLabel>
        <FormInput
          type="text"
          id="new-task"
          name="newTask"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          placeholder="Add task..."
          required
        />
        <AddButton type="submit" title="Add task">
          <IconWrapper><SlPlus /></IconWrapper>
        </AddButton>
      </StyledForm>

      <TaskList />

      {hasAnyTasks && (
        <ButtonRow>
          {/* Button for toggling between all and starred tasks */}
          <ToggleListButton
            onClick={handleToggleList}
            $active={showStarredOnly}
            title={showStarredOnly ? "Show all" : "Show starred tasks"}
          >
            {showStarredOnly ? (
              <><FaStar style={{ color: 'gold' }} /> Show all</>
            ) : (
              <><FaRegStar /> Show starred</>
            )}
          </ToggleListButton>

          {/* "Mark everyone as complete" - only shown if there are incomplete tasks */}
          {hasIncompleteTasks && (
            <StyledFunctionButton $type="complete" onClick={handleCompleteAll} title="Mark everyone as complete">
              <IconWrapper><FaCheckCircle /></IconWrapper> Mark all as complete
            </StyledFunctionButton>
          )}

          {tasks.length > 0 && ( // Show only if there are tasks
            <StyledFunctionButton $type="delete" onClick={handleDeleteAll} title="Delete all tasks">
              <IconWrapper><FaRegTrashAlt /></IconWrapper> Delete All
            </StyledFunctionButton>
          )}

        </ButtonRow>
      )}
    </FormContainer>
  );
};