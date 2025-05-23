import styled from "styled-components";

export const Header = styled.header`
  padding: 20px;
  background-color:rgb(237, 239, 239);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  box-sizing: border-box;
    
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
  letter-spacing: 5px;

  @media (max-width: 600px) {
    font-size: 2em;
  }
  
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`

export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderText>TODO LIST</HeaderText>
    </Header>
  );
}