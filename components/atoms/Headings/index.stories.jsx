import Heading from ".";

export default {
  title: "Atoms/Headings",
  component: Heading,
  args: {
    level: "1",
    children: "Heading",
    align: "",
    weight: "",
    color: "darkGray",
  },
  argTypes: {
    level: {
      control: "inline-radio",
      options: ["1", "2", "3", "4"],
    },
    align: {
      control: "inline-radio",
      options: ["default", "left"],
    },
    weight: {
      control: "inline-radio",
      options: ["default", "regular"],
    },
    color: {
      control: "inline-radio",
      options: ["black", "darkGray"],
    },
  },
};

export const Default = {};

export const Variant = {
  args: {
    color: "white",
  },
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
};

Variant.parameters = {
  backgrounds: { default: "blue-mode" },
};
