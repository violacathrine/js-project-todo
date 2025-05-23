import styled from 'styled-components';

export const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
`;

export const TaskItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease-in-out;

  &.completed {
    background-color: #e6ffe6; 
    text-decoration: line-through;
    color: #666;
  }
`;

export const TaskText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
  font-size: 1.1em;
  word-break: break-word;
  cursor: pointer;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1em;
  flex-shrink: 0;

  &:hover {
    background-color: #c82333;
  }
`;

export const StarredButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.$isStarred ? 'gold' : '#ccc'};
  cursor: pointer;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    color: gold;
  }

  svg {
    display: block; 
    margin: 0; 
    padding: 0; 
    line-height: 1; 
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const EmptyListMessage = styled.p`
  text-align: center;
  color: #666;
  margin: 20px 0;
`;