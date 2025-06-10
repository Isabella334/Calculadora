import type { Meta, StoryObj } from "@storybook/react";
import Display from "./Display.tsx";

const meta: Meta<typeof Display> = {
  title: "Calculator/Display",
  component: Display,
};

export default meta;

type Story = StoryObj<typeof Display>;

export const Default: Story = {
  args: {
    value: "123",
  },
};

export const LongValue: Story = {
  args: {
    value: "999999999",
  },
};

export const DecimalValue: Story = {
  args: {
    value: "3.1415926",
  },
};

