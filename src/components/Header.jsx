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
  color:rgb(24, 148, 183);
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
  font-size: 1.5em;
  color:rgb(0, 0, 0);
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
  
  @media (max-width: 400px) {
    font-size: 1em;
  }
`
export const HeaderLogo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 auto;
  display: block;

  @media (max-width: 600px) {
    width: 80px;
  }
  
  @media (max-width: 400px) {
    width: 60px;
  }
`;

export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderLogo src="logo.png" alt="Logo" />
      <HeaderText>Make it happen</HeaderText>
      <HeaderSubtitle>A ToDo-app created by Cathi</HeaderSubtitle>
    </Header>
  );
}