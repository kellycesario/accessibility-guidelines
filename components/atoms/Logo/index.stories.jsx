import Logo from ".";
import Svg from "../../ions/Svg";

export default {
  title: "Atoms/Logo",
  component: Logo,
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
