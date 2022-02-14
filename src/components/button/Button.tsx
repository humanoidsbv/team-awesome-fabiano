import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
  PlusIcon: boolean;
}

export const Button = ({ onClick, label, style = "primary" }: ButtonProps) => (
  <Styled.Button {...{ onClick }}>
    {PlusIcon && <PlusIcon fill="#fff" />}
    {label}
  </Styled.Button>
);
