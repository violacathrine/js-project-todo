import useTaskStore from "../stores/useTaskStore";

const Counter = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const notCompleted = tasks.filter((task) => !task.completed).length;

  return <p>Uncompleted tasks: {notCompleted}</p>;
}

export default Counter; 