// src/components/TaskList.jsx
import { useTaskStore } from '../stores/useTaskStore';
import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';

import {
  TaskListContainer,
  TaskItemWrapper,
  TaskText,
  TaskActions,
  DeleteButton,
  StarredButton,
  Checkbox,
  EmptyListMessage
} from './TaskList.styles.jsx';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);
  const toggleStarred = useTaskStore((state) => state.toggleStarred);

  // Sort tasks based on the following criteria:
  // 1. Allwys show completed tasks last.
  // 2. Show starred tasks first among incomplete tasks.
  // 3. Keeop the original order for tasks that are either all starred or all unstarred.
  const sortedTasks = [...tasks].sort((a, b) => {
    // Priority 1: Completed tasks last
    // If 'a' is completed and 'b' is not, move 'a' to the end.
    if (a.isCompleted && !b.isCompleted) {
      return 1;
    }
    // If 'b' is completed and 'a' is not, move 'b' to the end.
    if (!a.isCompleted && b.isCompleted) {
      return -1;
    }

    // If both tasks are either completed or not, we check for starred status.
    // Then sort starred tasks first among incomplete tasks.
    // Here we only compare starred status if both tasks are not completed.
    if (!a.isCompleted && !b.isCompleted) { // Only compare starred status if both tasks are not completed
      if (a.isStarred && !b.isStarred) {
        return -1; // a is starred and b is not -> a comes first
      }
      if (!a.isStarred && b.isStarred) {
        return 1; // b is starred and a is not -> b comes first
      }
    }

    // If neither task is starred or both are starred, we keep the original order.
    // or both tasks are starred or both are not starred
    return 0;
  });

  // Display the sorted tasks
  const displayedTasks = sortedTasks;

  return (
    <TaskListContainer>
      {displayedTasks.length === 0 && (
        <EmptyListMessage>
          No task added yet. Add one to get started!
        </EmptyListMessage>
      )}

      {displayedTasks.map((task) => {
        const checkboxId = `task-${task.id}`;
        return (
          <TaskItemWrapper key={task.id} className={task.isCompleted ? 'completed' : ''}>
            <Checkbox
              type="checkbox"
              id={checkboxId}
              checked={task.isCompleted}
              onChange={() => completeTask(task.id)}
            />
            <TaskText
              as="label"
              htmlFor={checkboxId}
              onClick={() => completeTask(task.id)}
            >
              {task.text}
            </TaskText>

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