import * as Styled from "./Button.styled";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
}

export const Button = ({ onClick, label, style = "primary" }: ButtonProps) => (
  <Styled.Button onClick={onClick}>{label}</Styled.Button>
);
