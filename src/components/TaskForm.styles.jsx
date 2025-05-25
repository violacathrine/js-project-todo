
import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px;
  background-color:rgb(237, 239, 239);
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

export const FormLabel = styled.label.attrs(() => ({
  className: "visually-hidden"
}))``;

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  height: 40px;
  box-sizing: border-box;
  color: #333333;
  }
`;

export const AddButton = styled.button`
  background-color:rgb(75, 24, 203);
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background-color: gray;
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


  background-color: ${props => props.type === "delete" ? "rgb(75, 24, 203);" : "rgb(75, 24, 203);"};

  &:hover {
    background-color: ${props => props.type === "delete" ? "rgb(75, 24, 203);" : "gray"};
  }

  ${IconWrapper} {
    margin-right: 8px;
    font-size: 20px;
  }
`;
export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px; 
  margin-top: 20px; 
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;