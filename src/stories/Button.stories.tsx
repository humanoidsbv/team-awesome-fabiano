import { MouseEvent } from "react";

import { Meta, Story } from "@storybook/react";
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
    label: { defaultValue: "Button" },
    kind: ["secondary", "primary"],
  },
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: true,
  kind: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: true,
  kind: "secondary",
};
