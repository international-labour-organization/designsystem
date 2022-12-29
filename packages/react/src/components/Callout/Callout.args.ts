import { CalloutProps } from "./Callout.props";

const baseArgs: CalloutProps = {
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  isCollapsible: false,
  headline: "Info Callout",
  type: "info",
};

const success: CalloutProps = {
  ...baseArgs,
  type: "success",
  headline: "Success Callout",
};

const warning: CalloutProps = {
  ...baseArgs,
  type: "warning",
  headline: "Warning Callout",
};

const error: CalloutProps = {
  ...baseArgs,
  cta: {
    label: "Optional CTA",
    url: "http://www.google.com",
  },
  isCollapsible: true,
  isOpen: false,
  headline: "Error Callout (Collapsible)",
  toggleOpenLabel: "Open",
  toggleClosedLabel: "Closed",
  type: "error",
};

const CalloutArgs = { baseArgs, success, warning, error };

export default CalloutArgs;
