import styled from "styled-components";
import { useTaskStore } from "../stores/useTaskStore";
import moment from "moment";

const CountContainer = styled.div`
  margin-top: 16px;
  text-align: left;
`;

const WarningText = styled.p`
  font-weight: bold;
  color: darkred;
  padding-top: 16px;

  @media (min-width: 768px) {
  text-align: center;
  }
`;

const InfoText = styled.p`
  margin: 4px 0;
`;

export const Count = () => {
  const tasks = useTaskStore((state) => state.tasks);

  const completed = tasks.filter((task) => task.isCompleted).length;
  const starredTasks = tasks.filter((task) => task.isStarred).length;
  const overdueTasks = tasks.filter(
    (task) =>
      task.dueDate &&
      moment(task.dueDate).isValid() &&
      moment(task.dueDate).isBefore(moment(), "day")
  ).length;
  const totalTasks = tasks.length;

  return (
    <CountContainer>
      <InfoText>
        Completed tasks: {completed} / {totalTasks}
      </InfoText>
      <InfoText>Starred tasks: {starredTasks}</InfoText>
      {overdueTasks > 0 && (
        <WarningText>
          You have {overdueTasks} {overdueTasks === 1 ? "task" : "tasks"} that{" "}
          {overdueTasks === 1 ? "has" : "have"} passed the due date.
        </WarningText>
      )}
    </CountContainer>
  );
};
