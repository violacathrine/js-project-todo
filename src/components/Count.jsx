import { useTaskStore } from "../stores/useTaskStore";

export const Count = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const completed = tasks.filter((task) => task.isCompleted).length;
  const totalTasks = tasks.length; 
  const starredTasks = tasks.filter((task) => task.isStarred).length;

  return (
      <div className="count-container">
        <p>Completed tasks: {completed} / {totalTasks}</p>
        <p>Starred tasks: {starredTasks}</p>
      </div>
  );
};