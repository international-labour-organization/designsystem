import { LoadingProps } from "./Loading.props";

const loadinglarge: LoadingProps = {
  className: "storybook",
  size: "large",
  status: "loading",
};

const loadedlarge: LoadingProps = {
  className: "storybook",
  size: "large",
  status: "loaded",
};

const loadingsmall: LoadingProps = {
  className: "storybook",
  size: "small",
  status: "loading",
};

const loadedsmall: LoadingProps = {
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
