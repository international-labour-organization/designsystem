import { LoadingProps } from "./Loading.props";

const idlelarge: LoadingProps = {
  className: "storybook",
  size: "large",
  status: "idle",
};

const loadinglarge: LoadingProps = {
  className: "storybook",
  message: "Submitting",
  size: "large",
  status: "loading",
};

const loadedlarge: LoadingProps = {
  className: "storybook",
  message: "Completed",
  size: "large",
  status: "loaded",
};

const idlesmall: LoadingProps = {
  className: "storybook",
  size: "small",
  status: "idle",
};

const loadingsmall: LoadingProps = {
  className: "storybook",
  message: "Submitting",
  size: "small",
  status: "loading",
};

const loadedsmall: LoadingProps = {
  className: "storybook",
  message: "Completed",
  size: "small",
  status: "loaded",
};

/**
 * Sample prop definitions for Loading's enumerable properties (imported in stories and test)
 */
const LoadingArgs = {
  loadinglarge,
  idlelarge,
  loadedlarge,
  idlesmall,
  loadingsmall,
  loadedsmall,
};

export default LoadingArgs;
