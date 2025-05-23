import styled from "styled-components";

export const Header = styled.header`
  background-color:rgb(255, 255, 255);
  padding: 20px;
  color: white;
    
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`

export const HeaderText = styled.h1`
  font-size: 2.5em;
  color:rgb(0, 0, 0);
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2em;
  }
  
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`
export const HeaderSubtitle = styled.h2`
  font-size: 1em;
  color:rgb(0, 0, 0);
  margin-top: 10px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
  
  @media (max-width: 400px) {
    font-size: 1em;
  }
`;

export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderText>Make it happen</HeaderText>
      <HeaderSubtitle>A simple but efficent to-do app</HeaderSubtitle>
    </Header>
  );
}