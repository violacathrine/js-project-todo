import { useTaskStore } from "../stores/useTaskStore";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);

return (
  <ul>
    {tasks.map((task) => (
      <li key="task.id">
        <span
          style={{
            textDecoration: task.isCompleted ? 'line-through' : 'unset',
          }}
        >
          {task.text}{" "}
        </span>{!task.isCompleted ? (
          <button onClick={() => completeTask(task.id)}>Done</button>
        ) : null}
        <button onClick={() => deleteTask(task.id)}>X</button>
      </li>
    ))}
  </ul>
);
};