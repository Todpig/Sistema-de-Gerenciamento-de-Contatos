import styled from "styled-components";

interface ButtonsProps {
  status: "primary" | "secondary" | "danger";
}

export const Button = styled.button<ButtonsProps>`
  background-color: ${(props) =>
    props.status === "secondary"
      ? "blue"
      : props.status === "primary"
      ? "green"
      : "red"};
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;
