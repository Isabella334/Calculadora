import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.tsx";

const meta: Meta<typeof Button> = {
  title: "Calculator/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "5",
    onClick: () => alert("Button 5 clicked!"),
  },
};

export const OperationButton: Story = {
  args: {
    label: "+",
    onClick: () => alert("Operation + clicked!"),
  },
};

export const ResetButton: Story = {
  args: {
    label: "C",
    onClick: () => alert("Reset clicked!"),
  },
};

export const DotButton: Story = {
  args: {
    label: ".",
    onClick: () => alert("Dot clicked!"),
  },
};

export const CustomLabelButton: Story = {
  args: {
    label: "√",
    onClick: () => alert("Square Root clicked!"),
  },
};

