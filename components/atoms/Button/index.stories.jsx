import Button from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Button",
    slug: "",
    isButton: true,
    color: "",
    size: "",
  },
  argTypes: {
    slug: {
      table: {
        disable: true,
      },
    },
    isButton: {
      table: {
        disable: true,
      },
    },
    color: {
      control: "inline-radio",
      options: ["default", "blue"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "large"],
    },
  },
};

export const Default = {};
