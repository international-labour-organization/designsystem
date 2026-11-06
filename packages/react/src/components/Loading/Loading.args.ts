import { LoadingProps } from "./Loading.props";

export const loadinglarge: LoadingProps = {
  className: "storybook",
  size: "large",
  status: "loading",
};

export const loadedlarge: LoadingProps = {
  className: "storybook",
  size: "large",
  status: "loaded",
};

export const loadingsmall: LoadingProps = {
  className: "storybook",
  size: "small",
  status: "loading",
};

export const loadedsmall: LoadingProps = {
  className: "storybook",
  size: "small",
  status: "loaded",
};

/**
 * Sample prop definitions for Loading's enumerable properties (imported in stories and test)
 */
const LoadingArgs = {
  loadinglarge,
  loadedlarge,
  loadingsmall,
  loadedsmall,
};

export default LoadingArgs;
