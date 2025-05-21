import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { TaskList } from "./TaskList";
import { SlPlus } from "react-icons/sl";
import {
  FormContainer,
  StyledForm,
  FormLabel,
  FormInput,
  AddButton,
  IconWrapper 
} from './TaskForm.styles.jsx'; 


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
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="new-task"></FormLabel>
        <FormInput
          type="text"
          id="new-task"
          name="newTask"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          placeholder="Enter a new task"
          required
        />
        <AddButton type="submit">
          <IconWrapper><SlPlus /></IconWrapper>
        </AddButton>
      </StyledForm>
      <TaskList />
    </FormContainer>
  );
};