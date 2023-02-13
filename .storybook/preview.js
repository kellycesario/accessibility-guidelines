import "../styles/globals.css";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "",
    values: [
      {
        name: "dark-mode",
        value: "#111111",
      },
      {
        name: "blue-mode",
        value: "#3d5282",
      },
    ],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
