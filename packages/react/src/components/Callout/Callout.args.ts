import { CalloutProps } from "./Callout.props";

const infoCallout: CalloutProps = {
  alert: "info",
  callback: "",
  children: "",
  isCollapsible: false,
  title: "Notification Title",
};

const errorCallout: CalloutProps = {
  alert: "error",
  buttonLabel: "Optional Label",
  callback: "",
  children: "",
  isCollapsible: true,
  isOpen: false,
  title: "Notification Title",
};

const successCallout: CalloutProps = {
  alert: "success",
  callback: "",
  children: "",
  isCollapsible: false,
  title: "Notification Title",
};

const warningCallout: CalloutProps = {
  alert: "warning",
  callback: "",
  children: "",
  isCollapsible: false,
  title: "Notification Title",
};

/**
 * Sample prop definitions for Callout's enumerable properties (imported in stories and tests).
 */
const CalloutArgs = {
  infoCallout,
  errorCallout,
  warningCallout,
  successCallout,
};

export default CalloutArgs;
