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
  font-size: 20px;
  font-weight: bold;
`

export const HeaderText = styled.h1`
  font-size: 40px;
  color:rgb(0, 0, 0);
  margin: 0;
  text-align: center;
  letter-spacing: 5px;
`

export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderText>TODO LIST</HeaderText>
    </Header>
  );
}