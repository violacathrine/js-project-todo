import styled from "styled-components";
import { TaskForm } from "./components/TaskForm";
import { HeaderComponent } from "./components/Header";
import { FooterComponent } from "./components/Footer";
import "./App.css"

const CardWrapper = styled.section`
  background-color: rgb(237, 239, 239);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1000px;
  margin: 50px auto;

    @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const App = () => {
  return (
    <>
      <CardWrapper>
        <HeaderComponent />
        <TaskForm />
        <FooterComponent />
      </CardWrapper>
    </>
  )
}
