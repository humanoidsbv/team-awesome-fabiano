import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "../components/button";

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

export const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
};
