import styled, { css } from "styled-components";

export const Button = styled.button`
  align-items: center;
  color: tomato;
  display: flex;
  justify-content: center;

  ${({ style }) =>
    style === "secondary" &&
    css`
      color: tomato;
      border: 10px solid tomato;
    `}
`;
