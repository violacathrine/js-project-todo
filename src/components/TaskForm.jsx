import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { TaskList } from "./TaskList";
import { SlPlus } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import {
  FormContainer,
  StyledForm,
  FormLabel,
  FormInput,
  AddButton,
  IconWrapper,
  DeleteAllButton,
  CompleteAllButton
} from './TaskForm.styles.jsx'; 


export const TaskForm = () => {
  const [taskValue, setTaskValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);
  const completeAllTasks = useTaskStore((state) => state.completeAllTasks);
  const removeAllTasks = useTaskStore((state) => state.removeAllTasks);

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
          placeholder="Add a new task here"
          required
        />
        <AddButton type="submit" title="Add task">
          <IconWrapper><SlPlus /></IconWrapper>
        </AddButton>
      </StyledForm>
      <TaskList />

<CompleteAllButton onClick={handleCompleteAll} title="Complete all tasks">
        <IconWrapper><MdFileDownloadDone /></IconWrapper>Complete all tasks
      </CompleteAllButton>

      <DeleteAllButton onClick={handleDeleteAll} title="Delete all tasks">
        <IconWrapper><FaRegTrashAlt /></IconWrapper> Delete all tasks
      </DeleteAllButton>
    </FormContainer>
  );
};