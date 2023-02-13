import Hero from ".";

export default {
  title: "Molecules/Hero",
  component: Hero,
  args: {
    title: "Accessibility Guidelines",
    description: "Some guidelines for an accessible website - from design to testing"
  }
};

export const Default = {};
Default.parameters = {
    backgrounds: { default: "blue-mode" },
  };
  