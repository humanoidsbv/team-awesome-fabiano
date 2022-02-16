import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
  icon?: boolean;
}

export const Button = ({ onClick, label, style = "primary" }: ButtonProps) => (
  <Styled.Button {...{ onClick }} {...{ style }}>
    {PlusIcon && <PlusIcon fill="#fff" />}
    {label}
  </Styled.Button>
);
