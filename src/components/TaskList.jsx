import { useTaskStore } from "../stores/useTaskStore";
import { SlCheck, SlClose } from "react-icons/sl";
import {
  StyledTaskList,
  TaskItem,
  TaskText,
  CompleteButton,
  DeleteButton,
  TaskActions,
  Icon
} from './TaskList.styles.jsx';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} $isCompleted={task.isCompleted}>
          <TaskText>{task.text}</TaskText>

          <TaskActions>
            {!task.isCompleted ? (
              <CompleteButton onClick={() => completeTask(task.id)}>
                <SlCheck />
              </CompleteButton>
            ) : null}

            <DeleteButton onClick={() => deleteTask(task.id)}>
              <SlClose />
            </DeleteButton>
            
          </TaskActions>
        </TaskItem>
      ))}
    </StyledTaskList>
  );
};