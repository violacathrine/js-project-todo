import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 20px;
  background-color: #e0f2f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;


export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  color: #333;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  min-height: 40px;
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
`;

export const DeleteAllButton = styled.button`
  background-color: #dc3545; 
  color: white;
  width: 40%; 
  height: 45px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #c82333;
  }

  ${IconWrapper} {
    margin-right: 8px;
    font-size: 1.3em;
  }
`;

export const CompleteAllButton = styled.button`
  background-color: rgb(19, 152, 19);
  color: white;
  width: 40%; 
  height: 45px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(19, 152, 19, 0.57);
  }

  ${IconWrapper} {
    margin-right: 8px;
    font-size: 1.3em;
  }
`;