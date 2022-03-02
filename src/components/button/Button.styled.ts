import styled, { css } from "styled-components";

export const Button = styled.button<{ kind: "primary" | "secondary" }>`
  align-items: center;
  background-color: ${({ theme }) => theme.green1};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.grey1};
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

  :hover {
    background-color: ${({ theme }) => theme.green2};
  }

  :focus {
    background-color: ${({ theme }) => theme.green3};
  }

  ${({ kind }) =>
    kind === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.grey2};
      color: ${({ theme }) => theme.grey6};

      :hover {
        background-color: ${({ theme }) => theme.grey3};
      }

      :focus {
        background-color: ${({ theme }) => theme.grey4};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.grey3};
      cursor: not-allowed;

      :hover {
        background-color: ${({ theme }) => theme.grey3};
      }
    `}
`;
