import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  background-color: #e0f2f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  color: #333;
`;

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

export const AddButton = styled.button`
background: none;
  color: black;
  padding: 5px 5px;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #007bb5;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 5px; /* Mellanrum mellan ikon och text/symbol */
  font-size: 1.2em;
  line-height: 1; /* För att bättre kontrollera ikonens vertikala justering */
`;