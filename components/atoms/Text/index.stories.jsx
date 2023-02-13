import Text from ".";

export default {
  title: "Atoms/Text",
  component: Text,
  args: {
    children:
      "Some guidelines for an accessible website - from design to testing",
    color: "darkGray",
    weight: "",
    size: "",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["darkGray", "black"],
    },
    weight: {
      control: "inline-radio",
      options: ["default", "bold"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "large"],
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
