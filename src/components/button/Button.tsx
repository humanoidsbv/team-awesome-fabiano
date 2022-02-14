import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
}

export const Button = ({ onClick, label, style = "primary" }: ButtonProps) => (
  <Styled.Button onClick={onClick}>
    {PlusIcon && <PlusIcon fill="#fff" />}
    {label}
  </Styled.Button>
);
