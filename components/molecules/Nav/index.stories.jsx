import Nav from ".";
import Svg from "../../ions/Svg";

export default {
  title: "Molecules/Nav",
  component: Nav,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div>
          <Svg />
          <Story />
        </div>
      );
    },
  ],
};

export const Default = {};

Default.parameters = {
  backgrounds: { default: "blue-mode" },
};
