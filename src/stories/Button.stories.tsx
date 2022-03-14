import { MouseEvent } from "react";

import { Button } from "../components/button";

interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  kind?: "primary" | "secondary";
  icon?: boolean;
  disabled?: boolean;
}

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      kind: ["secondary", "primary"],
      control: { type: "select" },
    },
  },
};

export const Template = (args: ButtonProps) => <Button {...args} />;
