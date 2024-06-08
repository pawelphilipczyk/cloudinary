import { Button as BaseButton } from "@mui/base/Button";
import { Input as BaseInput } from "@mui/base/Input";
import { Form as ReactRouterForm } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(BaseButton)`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  button {
  }
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const Input = styled(BaseInput)`
  input {
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
  }
`;

export const Form = styled(ReactRouterForm)`
  display: flex;
  gap: 0.5em;
`;