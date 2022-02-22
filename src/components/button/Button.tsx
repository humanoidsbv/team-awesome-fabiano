import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  kind?: "primary" | "secondary";
  icon?: boolean;
}

export const Button = ({ onClick, label, kind = "primary", icon }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, kind, icon }}>
      {icon && <PlusIcon fill="#fff" />}
      {label}
    </Styled.Button>
  );
};
