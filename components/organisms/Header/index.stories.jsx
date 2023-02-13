import Header from ".";
import Svg from "../../ions/Svg";

export default {
  title: "Organisms/Header",
  component: Header,
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
