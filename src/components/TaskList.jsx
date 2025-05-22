import { useTaskStore } from '../stores/useTaskStore';
import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';

import {
  TaskListContainer,
  TaskItemWrapper,
  TaskText,
  TaskActions,
  DeleteButton,
  StarredButton, 
  Checkbox 
} from './TaskList.styles.jsx';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);
  const toggleStarred = useTaskStore((state) => state.toggleStarred);
  const showStarredOnly = useTaskStore((state) => state.showStarredOnly);

  const filteredTasks = showStarredOnly
    ? tasks.filter(task => task.isStarred)
    : tasks;

  return (
    <TaskListContainer>
      {filteredTasks.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', margin: '20px 0' }}>
          {showStarredOnly ? 'No starred tasks yet!' : 'No tasks to show yet. Add a new one!'}
        </p>
      )}

      {filteredTasks.map((task) => (
        <TaskItemWrapper key={task.id} className={task.isCompleted ? 'completed' : ''}>

          <Checkbox
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => completeTask(task.id)} 
          />
          <TaskText onClick={() => completeTask(task.id)}>
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
      ))}
    </TaskListContainer>
  );
};