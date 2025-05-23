import { useTaskStore } from '../stores/useTaskStore';
import { sortTasks } from '../utils/sortTasks.js';
import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import moment from "moment";

import {
  TaskListContainer,
  TaskItemWrapper,
  TaskText,
  TaskActions,
  DeleteButton,
  StarredButton,
  Checkbox,
  EmptyListMessage,
  TimestampText,
  TaskTextWrapper
} from './TaskList.styles.jsx';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);
  const toggleStarred = useTaskStore((state) => state.toggleStarred);


  const sortedTasks = sortTasks(tasks);

  return (
    <TaskListContainer>
      {sortedTasks.length === 0 && (
        <EmptyListMessage>
          <div className="image-wrapper">
            <img src="/empty.png" alt="Picture of no tasks" />
          </div>
          No task added yet. Add one to get started!
        </EmptyListMessage>
      )}

      {sortedTasks.map((task) => {
        const checkboxId = `task-${task.id}`;
        return (
          <TaskItemWrapper key={task.id} className={task.isCompleted ? 'completed' : ''}>
            <TaskTextWrapper>
              <TaskText as="label" htmlFor={checkboxId}>
                <Checkbox
                  type="checkbox"
                  id={checkboxId}
                  checked={task.isCompleted}
                  onChange={() => completeTask(task.id)}
                />
                {task.text || "Unnamed task"}
              </TaskText>
              <TimestampText>
                {moment(task.createdAt).format("YYYY-MM-DD")}
              </TimestampText>
            </TaskTextWrapper>

            <TaskActions>
              <StarredButton
                onClick={() => toggleStarred(task.id)}
                $isStarred={task.isStarred}
                title={task.isStarred ? "Remove star" : "Star this task"}
              >
                {task.isStarred ? <FaStar /> : <FaRegStar />}
              </StarredButton>

              <DeleteButton onClick={() => deleteTask(task.id)} title="Delete task">
                <FaRegTrashAlt />
              </DeleteButton>
            </TaskActions>
          </TaskItemWrapper>
        );
      })}
    </TaskListContainer>
  );
};