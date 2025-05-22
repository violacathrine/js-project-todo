import React from 'react';
import { useTaskStore } from "../stores/useTaskStore";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  StyledTaskList,
  TaskItem,
  TaskText,
  DeleteButton,
  TaskActions,
  Icon,
  CheckboxContainer,
  TaskCheckbox
} from './TaskList.styles.jsx';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} $isCompleted={task.isCompleted}>
          <CheckboxContainer>
            <TaskCheckbox
              type="checkbox"
              title="Complete Task"
              checked={task.isCompleted}
              onChange={() => completeTask(task.id)}
            />
            <TaskText $isCompleted={task.isCompleted}>{task.text}</TaskText>
          </CheckboxContainer>

          <TaskActions>
            <DeleteButton onClick={() => deleteTask(task.id)} title="Delete Task">
              <Icon><FaRegTrashAlt />
              </Icon>
            </DeleteButton>
          </TaskActions>
        </TaskItem>
      ))}
    </StyledTaskList>
  );
};