
import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 20px;
  background-color:rgb(237, 239, 239);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: none;
  `;

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  height: 40px;
  box-sizing: border-box;
`;

export const AddButton = styled.button`
  background-color: #008CBA;
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background-color: #007bb5;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const StyledFunctionButton = styled.button`
  color: white;
  width: 40%;
  flex-grow: 1;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;


  background-color: ${props => props.$type === 'delete' ? "#c82333" : "#066028"};

  &:hover {
    background-color: ${props => props.$type === 'delete' ? "#dc3545" : '#218838'};
  }

  ${IconWrapper} {
    margin-right: 8px;
    font-size: 1.3em;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px; 
  margin-top: 20px; 
  width: 100%; 
`;