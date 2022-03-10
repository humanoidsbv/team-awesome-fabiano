import React from "react";

import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  kind?: "primary" | "secondary";
  icon?: boolean;
  disabled?: boolean;
}

export const Button = ({ onClick, label, kind = "primary", icon, disabled }: ButtonProps) => {
  return (
    <Styled.Button data-cy="new-button" {...{ onClick, kind, icon, disabled }}>
      {icon && <PlusIcon fill="#fff" />}
      {label}
    </Styled.Button>
  );
};
