import styled, { css } from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryGreen};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.primaryWhite};
  column-gap: 15px;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  height: 40px;
  justify-content: center;
  width: 100%;

  @media screen and (${({ theme }) => theme.mobileSmall}) {
    max-width: 190px;
  }

  ${({ style }) =>
    style === "secondary" &&
    css`
      background-color: green;
      border: 10px solid yellow;
    `}
`;