import styled, { css, ThemeProps } from "styled-components";
import { theme } from "../../../styles/theme";

interface ButtonProps extends ThemeProps<typeof theme> {
  kind: "primary" | "secondary";
}

export const Button = styled.button(
  ({ disabled, kind, theme }: ButtonProps & HTMLButtonElement) => css`
    align-items: center;
    background-color: ${theme.green1};
    border-radius: 4px;
    border: none;
    color: ${theme.grey1};
    column-gap: 15px;
    cursor: pointer;
    display: flex;
    font-family: ${theme.fontPrimary};
    font-size: 14px;
    height: 40px;
    justify-content: center;
    width: 100%;

    @media screen and (${theme.mobileSmall}) {
      max-width: 190px;
    }

    :hover {
      background-color: ${theme.green2};
    }

    :focus {
      background-color: ${theme.green3};
    }

    ${kind === "secondary" &&
    css`
      background-color: ${theme.grey2};
      color: ${theme.grey6};

      :hover {
        background-color: ${theme.grey3};
      }

      :focus {
        background-color: ${theme.grey4};
      }
    `}

    ${disabled &&
    css`
      background-color: ${theme.grey3};
      cursor: not-allowed;

      :hover {
        background-color: ${theme.grey3};
      }
    `}
  `,
);
