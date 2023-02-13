import Advertising from ".";

export default {
  title: "Molecules/Advertising",
  component: Advertising,
  args: {
    image: "/assets/img/contact-now.png",
    title: "We help you build your accessible project",
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
