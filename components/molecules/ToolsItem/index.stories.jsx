import ToolsItem from ".";
import Svg from "../../ions/Svg";

export default {
  title: "Molecules/ToolsItem",
  component: ToolsItem,
  args: {
    name: "Lighthouse",
    description:
      "Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps",
  },
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
