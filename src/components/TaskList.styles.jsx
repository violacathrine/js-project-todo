import styled from 'styled-components';

export const StyledTaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 40px;
  box-sizing: border-box; 
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
  padding-right: 10px;
`;

export const TaskCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  flex-shrink: 0; 
`;

export const TaskText = styled.span`
  text-decoration: ${(props) => (props.$isCompleted ? 'line-through' : 'unset')};
  color: ${(props) => (props.$isCompleted ? '#888' : 'inherit')};
  word-break: break-word;
  font-size: 1em;
  line-height: 1.4;
`;

export const TaskActionButton = styled.button`
  padding: 8px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const DeleteButton = styled(TaskActionButton)`
  background-color: #f44336;
  color: white;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
  align-items: center;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;