import Select from ".";

const options = [
  { key: "option1", name: "option 1" },
  { key: "option2", name: "option 2" },
  { key: "option3", name: "option 3" },
];

export default {
  title: "Atoms/Select",
  component: Select,
  args: {
    options: options,
    active: "option1",
    hasDefault: false,
    defaultValue: "",
    defaultLabel: "All",
  },
  argTypes: {
    hasDefault: {
      control: "boolean",
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    defaultLabel: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    active: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
