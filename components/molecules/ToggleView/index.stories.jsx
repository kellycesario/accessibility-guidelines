import ToggleView from ".";
import Svg from "../../ions/Svg";

export default {
  title: "Molecules/ToggleView",
  component: ToggleView,
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

export const ListMode = {
  args: {
    mode: "list",
  },
};

export const GridMode = {
  args: {
    mode: "grid",
  },
};
