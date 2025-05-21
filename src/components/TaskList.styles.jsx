import styled from 'styled-components';

export const StyledTaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const TaskItem = styled.li`
font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  // Dynamic styling based on props
  text-decoration: ${(props) => (props.$isCompleted ? 'line-through' : 'unset')};
  color: ${(props) => (props.$isCompleted ? '#888' : 'inherit')};
`;

export const TaskText = styled.span`
  flex-grow: 1;
`;

export const TaskActionButton = styled.button`
font-size: 22px;
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const CompleteButton = styled(TaskActionButton)`
  background-color: #4CAF50; /* Grön */
  color: white;
`;

export const DeleteButton = styled(TaskActionButton)`
  background-color: #f44336; /* Röd */
  color: white;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 5px; /* Mellanrum mellan knapparna */
`;

export const Icon = styled.span`
  margin-right: 5px; /* Mellanrum mellan ikon och text om det finns någon */
  font-size: 1.2em;
`;