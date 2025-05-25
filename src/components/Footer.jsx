import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Footer = styled.footer`
  padding: 20px;
  background-color: rgb(237, 239, 239);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px; 
  box-sizing: border-box; 
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const FooterText = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #333;

  a {
  color: #333;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 4px;

    &:hover {
      text-decoration: none;
    }

    svg {
      font-size: 18px;
      padding-right: 5px;
    }
  }
`;

export const FooterComponent = () => {
  return (
    <Footer>
      <FooterText>
      © 2025 Designed and created by {" "}
        <a
          href="https://github.com/violacathrine/js-project-todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cathi <FaGithub />
        </a>
      </FooterText>
    </Footer>
  );
};